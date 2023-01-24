import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674527080609 implements MigrationInterface {
    name = 'default1674527080609'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Banks\` (\`id_bank\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`code\` varchar(3) NOT NULL, \`ispb\` varchar(10) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id_bank\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Bank_accounts\` ADD \`id_bank\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Bank_accounts\` ADD CONSTRAINT \`FK_d0333b9b14aeacb320bea569bf7\` FOREIGN KEY (\`id_bank\`) REFERENCES \`Banks\`(\`id_bank\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Bank_accounts\` DROP FOREIGN KEY \`FK_d0333b9b14aeacb320bea569bf7\``);
        await queryRunner.query(`ALTER TABLE \`Bank_accounts\` DROP COLUMN \`id_bank\``);
        await queryRunner.query(`DROP TABLE \`Banks\``);
    }

}
