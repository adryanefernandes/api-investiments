import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674524497850 implements MigrationInterface {
  name = "default1674524497850";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`Addresses\` (\`id_address\` int NOT NULL AUTO_INCREMENT, \`zipcode\` varchar(9) NOT NULL, \`state\` varchar(2) NOT NULL, \`city\` varchar(255) NOT NULL, \`neighborhood\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`complement\` varchar(255) NULL, \`number\` int NOT NULL, \`isCurrent\` tinyint NOT NULL DEFAULT 1, \`id_account\` int NULL, \`uuid_account\` varchar(36) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id_address\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`Accounts\` (\`id_account\` int NOT NULL AUTO_INCREMENT, \`uuid_account\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`document\` varchar(14) NOT NULL, \`email\` varchar(255) NOT NULL, \`cellphone\` varchar(14) NULL, \`tellphone\` varchar(14) NULL, \`status\` enum ('active', 'inactive', 'pending', 'blocked') NOT NULL DEFAULT 'active', \`active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`IDX_450439ec7d02e26e69180e138a\` (\`document\`), UNIQUE INDEX \`IDX_0c5666efc38b6f023b7814c73d\` (\`email\`), PRIMARY KEY (\`id_account\`, \`uuid_account\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`Bank_accounts\` (\`id_bank_account\` int NOT NULL AUTO_INCREMENT, \`agency\` varchar(5) NOT NULL, \`account_number\` varchar(12) NOT NULL, \`id_account\` int NULL, \`uuid_account\` varchar(36) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id_bank_account\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`Addresses\` ADD CONSTRAINT \`FK_7b8935904fc672d97acf69eeab9\` FOREIGN KEY (\`id_account\`, \`uuid_account\`) REFERENCES \`Accounts\`(\`id_account\`,\`uuid_account\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`Bank_accounts\` ADD CONSTRAINT \`FK_71bab9af9b6d7527d0202a37442\` FOREIGN KEY (\`id_account\`, \`uuid_account\`) REFERENCES \`Accounts\`(\`id_account\`,\`uuid_account\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`Bank_accounts\` DROP FOREIGN KEY \`FK_71bab9af9b6d7527d0202a37442\``
    );
    await queryRunner.query(
      `ALTER TABLE \`Addresses\` DROP FOREIGN KEY \`FK_7b8935904fc672d97acf69eeab9\``
    );
    await queryRunner.query(`DROP TABLE \`Bank_accounts\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_0c5666efc38b6f023b7814c73d\` ON \`Accounts\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_450439ec7d02e26e69180e138a\` ON \`Accounts\``
    );
    await queryRunner.query(`DROP TABLE \`Accounts\``);
    await queryRunner.query(`DROP TABLE \`Addresses\``);
  }
}
