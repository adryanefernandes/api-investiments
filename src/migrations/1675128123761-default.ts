import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675128123761 implements MigrationInterface {
    name = 'default1675128123761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Users\` ADD \`id_password\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Users\` ADD UNIQUE INDEX \`IDX_310cd8d57858e5f87133168447\` (\`id_password\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_310cd8d57858e5f87133168447\` ON \`Users\` (\`id_password\`)`);
        await queryRunner.query(`ALTER TABLE \`Users\` ADD CONSTRAINT \`FK_310cd8d57858e5f871331684474\` FOREIGN KEY (\`id_password\`) REFERENCES \`Passwords\`(\`id_password\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Users\` DROP FOREIGN KEY \`FK_310cd8d57858e5f871331684474\``);
        await queryRunner.query(`DROP INDEX \`REL_310cd8d57858e5f87133168447\` ON \`Users\``);
        await queryRunner.query(`ALTER TABLE \`Users\` DROP INDEX \`IDX_310cd8d57858e5f87133168447\``);
        await queryRunner.query(`ALTER TABLE \`Users\` DROP COLUMN \`id_password\``);
    }

}
