import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675112184316 implements MigrationInterface {
    name = 'default1675112184316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Passwords\` (\`id_password\` int NOT NULL AUTO_INCREMENT, \`hash\` varchar(255) NOT NULL, \`id_user\` int NULL, \`uuid_user\` varchar(36) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`REL_5399ef81a1775eb32ab4f5ba0b\` (\`id_user\`, \`uuid_user\`), PRIMARY KEY (\`id_password\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Users\` DROP COLUMN \`active\``);
        await queryRunner.query(`ALTER TABLE \`Passwords\` ADD CONSTRAINT \`FK_5399ef81a1775eb32ab4f5ba0b9\` FOREIGN KEY (\`id_user\`, \`uuid_user\`) REFERENCES \`Users\`(\`id_user\`,\`uuid_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Passwords\` DROP FOREIGN KEY \`FK_5399ef81a1775eb32ab4f5ba0b9\``);
        await queryRunner.query(`ALTER TABLE \`Users\` ADD \`active\` tinyint NOT NULL DEFAULT '1'`);
        await queryRunner.query(`DROP INDEX \`REL_5399ef81a1775eb32ab4f5ba0b\` ON \`Passwords\``);
        await queryRunner.query(`DROP TABLE \`Passwords\``);
    }

}
