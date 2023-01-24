import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674526946155 implements MigrationInterface {
    name = 'default1674526946155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Addresses\` (\`id_address\` int NOT NULL AUTO_INCREMENT, \`zipcode\` varchar(9) NOT NULL, \`state\` varchar(2) NOT NULL, \`city\` varchar(255) NOT NULL, \`neighborhood\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`complement\` varchar(255) NULL, \`number\` int NOT NULL, \`isCurrent\` tinyint NOT NULL DEFAULT 1, \`id_user\` int NULL, \`uuid_user\` varchar(36) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id_address\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Addresses\` ADD CONSTRAINT \`FK_a0e38e0a9958c36e8bdf30b21ea\` FOREIGN KEY (\`id_user\`, \`uuid_user\`) REFERENCES \`Users\`(\`id_user\`,\`uuid_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Addresses\` DROP FOREIGN KEY \`FK_a0e38e0a9958c36e8bdf30b21ea\``);
        await queryRunner.query(`DROP TABLE \`Addresses\``);
    }

}
