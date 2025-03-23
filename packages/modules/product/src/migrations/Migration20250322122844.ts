import { Migration } from '@mikro-orm/migrations';

export class Migration20250322122844 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "product_option" add column if not exists "rank" integer not null default 0, add column if not exists "widget" text null;`);

    this.addSql(`alter table if exists "product_option_value" add column if not exists "is_default" boolean not null default false, add column if not exists "rank" integer not null default 0;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "product_option" drop column if exists "rank", drop column if exists "widget";`);

    this.addSql(`alter table if exists "product_option_value" drop column if exists "is_default", drop column if exists "rank";`);
  }

}
