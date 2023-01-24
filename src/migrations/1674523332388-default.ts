import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674523332388 implements MigrationInterface {
    name = 'default1674523332388'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Users\` (\`id_user\` int NOT NULL AUTO_INCREMENT, \`uuid_user\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`document\` varchar(14) NOT NULL, \`email\` varchar(255) NOT NULL, \`cellphone\` varchar(14) NULL, \`tellphone\` varchar(14) NULL, \`status\` enum ('active', 'inactive', 'pending', 'blocked') NOT NULL DEFAULT 'active', \`active\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_cf5b6b34e888c0034e30210c86\` (\`document\`), UNIQUE INDEX \`IDX_3c3ab3f49a87e6ddb607f3c494\` (\`email\`), PRIMARY KEY (\`id_user\`, \`uuid_user\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Addresses\` (\`id_address\` int NOT NULL AUTO_INCREMENT, \`zipcode\` varchar(9) NOT NULL, \`state\` varchar(2) NOT NULL, \`city\` varchar(255) NOT NULL, \`neighborhood\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`complement\` varchar(255) NULL, \`number\` int NOT NULL, \`isCurrent\` tinyint NOT NULL DEFAULT 1, \`id_user\` int NULL, \`uuid_user\` varchar(36) NULL, PRIMARY KEY (\`id_address\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Addresses\` ADD CONSTRAINT \`FK_a0e38e0a9958c36e8bdf30b21ea\` FOREIGN KEY (\`id_user\`, \`uuid_user\`) REFERENCES \`Users\`(\`id_user\`,\`uuid_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Addresses\` DROP FOREIGN KEY \`FK_a0e38e0a9958c36e8bdf30b21ea\``);
        await queryRunner.query(`DROP TABLE \`Addresses\``);
        await queryRunner.query(`DROP INDEX \`IDX_3c3ab3f49a87e6ddb607f3c494\` ON \`Users\``);
        await queryRunner.query(`DROP INDEX \`IDX_cf5b6b34e888c0034e30210c86\` ON \`Users\``);
        await queryRunner.query(`DROP TABLE \`Users\``);
    }

}
