import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674620201747 implements MigrationInterface {
    name = 'default1674620201747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Addresses\` CHANGE \`isCurrent\` \`is_current\` tinyint NOT NULL DEFAULT '1'`);
        await queryRunner.query(`CREATE TABLE \`Historic_asset\` (\`id_historic_asset\` int NOT NULL AUTO_INCREMENT, \`amount\` int NOT NULL DEFAULT '0', \`variation\` enum ('down', 'up') NOT NULL, \`id_asset\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id_historic_asset\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Investments\` (\`id_investment\` int NOT NULL AUTO_INCREMENT, \`qty_quotas\` int NOT NULL DEFAULT '0', \`quota_price\` int NOT NULL, \`amount\` int NOT NULL DEFAULT '0', \`movement\` enum ('buy', 'sell') NOT NULL, \`id_historic_asset\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id_investment\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Historic_asset\` ADD CONSTRAINT \`FK_f7e14386402b352eca6776f20b8\` FOREIGN KEY (\`id_asset\`) REFERENCES \`Assets\`(\`id_asset\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Investments\` ADD CONSTRAINT \`FK_c8c7aa48d3a87fccbed8b2b6e22\` FOREIGN KEY (\`id_historic_asset\`) REFERENCES \`Historic_asset\`(\`id_historic_asset\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Investments\` DROP FOREIGN KEY \`FK_c8c7aa48d3a87fccbed8b2b6e22\``);
        await queryRunner.query(`ALTER TABLE \`Historic_asset\` DROP FOREIGN KEY \`FK_f7e14386402b352eca6776f20b8\``);
        await queryRunner.query(`DROP TABLE \`Investments\``);
        await queryRunner.query(`DROP TABLE \`Historic_asset\``);
        await queryRunner.query(`ALTER TABLE \`Addresses\` CHANGE \`is_current\` \`isCurrent\` tinyint NOT NULL DEFAULT '1'`);
    }

}
