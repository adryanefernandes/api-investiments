import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674527190315 implements MigrationInterface {
    name = 'default1674527190315'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Types_bank_accounts\` (\`id_type_bank_account\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`IDX_8f10dc2ac689950020a43bdceb\` (\`title\`), PRIMARY KEY (\`id_type_bank_account\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Bank_accounts\` ADD \`id_type_bank_account\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Bank_accounts\` ADD CONSTRAINT \`FK_8715b4c617d6b24242dbdd74dcd\` FOREIGN KEY (\`id_type_bank_account\`) REFERENCES \`Types_bank_accounts\`(\`id_type_bank_account\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Bank_accounts\` DROP FOREIGN KEY \`FK_8715b4c617d6b24242dbdd74dcd\``);
        await queryRunner.query(`ALTER TABLE \`Bank_accounts\` DROP COLUMN \`id_type_bank_account\``);
        await queryRunner.query(`DROP INDEX \`IDX_8f10dc2ac689950020a43bdceb\` ON \`Types_bank_accounts\``);
        await queryRunner.query(`DROP TABLE \`Types_bank_accounts\``);
    }

}
