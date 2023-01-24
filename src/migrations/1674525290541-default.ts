import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674525290541 implements MigrationInterface {
    name = 'default1674525290541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Users\` (\`id_user\` int NOT NULL AUTO_INCREMENT, \`uuid_user\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`document\` varchar(14) NOT NULL, \`email\` varchar(255) NOT NULL, \`cellphone\` varchar(14) NULL, \`tellphone\` varchar(14) NULL, \`status\` enum ('active', 'inactive', 'pending', 'blocked') NOT NULL DEFAULT 'active', \`active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`IDX_cf5b6b34e888c0034e30210c86\` (\`document\`), UNIQUE INDEX \`IDX_3c3ab3f49a87e6ddb607f3c494\` (\`email\`), PRIMARY KEY (\`id_user\`, \`uuid_user\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Banks\` (\`id_bank\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`code\` varchar(3) NOT NULL, \`ispb\` varchar(10) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id_bank\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Bank_accounts\` (\`id_bank_account\` int NOT NULL AUTO_INCREMENT, \`agency\` varchar(5) NOT NULL, \`account_number\` varchar(12) NOT NULL, \`id_user\` int NULL, \`uuid_user\` varchar(36) NULL, \`id_bank\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id_bank_account\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Addresses\` (\`id_address\` int NOT NULL AUTO_INCREMENT, \`zipcode\` varchar(9) NOT NULL, \`state\` varchar(2) NOT NULL, \`city\` varchar(255) NOT NULL, \`neighborhood\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`complement\` varchar(255) NULL, \`number\` int NOT NULL, \`isCurrent\` tinyint NOT NULL DEFAULT 1, \`id_user\` int NULL, \`uuid_user\` varchar(36) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id_address\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Bank_accounts\` ADD CONSTRAINT \`FK_16dbac646c75f06bee71dede877\` FOREIGN KEY (\`id_user\`, \`uuid_user\`) REFERENCES \`Users\`(\`id_user\`,\`uuid_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Bank_accounts\` ADD CONSTRAINT \`FK_d0333b9b14aeacb320bea569bf7\` FOREIGN KEY (\`id_bank\`) REFERENCES \`Banks\`(\`id_bank\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Addresses\` ADD CONSTRAINT \`FK_a0e38e0a9958c36e8bdf30b21ea\` FOREIGN KEY (\`id_user\`, \`uuid_user\`) REFERENCES \`Users\`(\`id_user\`,\`uuid_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Addresses\` DROP FOREIGN KEY \`FK_a0e38e0a9958c36e8bdf30b21ea\``);
        await queryRunner.query(`ALTER TABLE \`Bank_accounts\` DROP FOREIGN KEY \`FK_d0333b9b14aeacb320bea569bf7\``);
        await queryRunner.query(`ALTER TABLE \`Bank_accounts\` DROP FOREIGN KEY \`FK_16dbac646c75f06bee71dede877\``);
        await queryRunner.query(`DROP TABLE \`Addresses\``);
        await queryRunner.query(`DROP TABLE \`Bank_accounts\``);
        await queryRunner.query(`DROP TABLE \`Banks\``);
        await queryRunner.query(`DROP INDEX \`IDX_3c3ab3f49a87e6ddb607f3c494\` ON \`Users\``);
        await queryRunner.query(`DROP INDEX \`IDX_cf5b6b34e888c0034e30210c86\` ON \`Users\``);
        await queryRunner.query(`DROP TABLE \`Users\``);
    }

}
