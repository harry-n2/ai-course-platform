-- =============================================
-- WTN AI Course Platform — Supabase初期設定SQL
-- Supabase SQL Editorで実行してください
-- =============================================

-- 1. usersテーブル作成
create table if not exists public.users (
  id            uuid primary key references auth.users(id) on delete cascade,
  email         text unique not null,
  is_paid_member boolean default false,
  created_at    timestamp with time zone default now()
);

-- 2. Row Level Security 有効化
alter table public.users enable row level security;

-- 3. ポリシー設定（自分のデータのみ読み書き可能）
create policy "Users can read own data"
  on public.users
  for select
  using (auth.uid() = id);

create policy "Users can update own data"
  on public.users
  for update
  using (auth.uid() = id);

-- 4. 新規ユーザー登録時に自動でusersテーブルに挿入するトリガー
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 5. Stripe Webhook用：is_paid_memberをtrueに更新する関数
-- ※ この関数はStripe Webhook APIルートから呼び出されます
create or replace function public.set_paid_member(user_id uuid)
returns void as $$
begin
  update public.users
  set is_paid_member = true
  where id = user_id;
end;
$$ language plpgsql security definer;
