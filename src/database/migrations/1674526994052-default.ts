import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674526994052 implements MigrationInterface {
    name = 'default1674526994052'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Bank_accounts\` (\`id_bank_account\` int NOT NULL AUTO_INCREMENT, \`agency\` varchar(5) NOT NULL, \`account_number\` varchar(12) NOT NULL, \`id_user\` int NULL, \`uuid_user\` varchar(36) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id_bank_account\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Bank_accounts\` ADD CONSTRAINT \`FK_16dbac646c75f06bee71dede877\` FOREIGN KEY (\`id_user\`, \`uuid_user\`) REFERENCES \`Users\`(\`id_user\`,\`uuid_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Bank_accounts\` DROP FOREIGN KEY \`FK_16dbac646c75f06bee71dede877\``);
        await queryRunner.query(`DROP TABLE \`Bank_accounts\``);
    }

}
