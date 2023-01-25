import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674620827253 implements MigrationInterface {
    name = 'default1674620827253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Investments\` DROP FOREIGN KEY \`FK_c8c7aa48d3a87fccbed8b2b6e22\``);
        await queryRunner.query(`ALTER TABLE \`Investments\` CHANGE \`id_historic_asset\` \`id_asset_historic\` int NULL`);
        await queryRunner.query(`CREATE TABLE \`Asset_history\` (\`id_asset_historic\` int NOT NULL AUTO_INCREMENT, \`amount\` int NOT NULL DEFAULT '0', \`variation\` enum ('down', 'up') NOT NULL, \`id_asset\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id_asset_historic\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Extracts\` (\`id_asset_historic\` int NOT NULL AUTO_INCREMENT, \`amount\` int NOT NULL DEFAULT '0', \`id_user\` int NULL, \`uuid_user\` varchar(36) NULL, \`id_wallet\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id_asset_historic\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Asset_history\` ADD CONSTRAINT \`FK_af51c9680b9b5551a6b25e8de7f\` FOREIGN KEY (\`id_asset\`) REFERENCES \`Assets\`(\`id_asset\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Investments\` ADD CONSTRAINT \`FK_6e66166fc44c54880120b784ea4\` FOREIGN KEY (\`id_asset_historic\`) REFERENCES \`Asset_history\`(\`id_asset_historic\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Extracts\` ADD CONSTRAINT \`FK_21bcf2daec1badb725903ae1c48\` FOREIGN KEY (\`id_user\`, \`uuid_user\`) REFERENCES \`Users\`(\`id_user\`,\`uuid_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Extracts\` ADD CONSTRAINT \`FK_2e89585d4af1a114b8ea70a667f\` FOREIGN KEY (\`id_wallet\`) REFERENCES \`Wallets\`(\`id_wallet\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Extracts\` DROP FOREIGN KEY \`FK_2e89585d4af1a114b8ea70a667f\``);
        await queryRunner.query(`ALTER TABLE \`Extracts\` DROP FOREIGN KEY \`FK_21bcf2daec1badb725903ae1c48\``);
        await queryRunner.query(`ALTER TABLE \`Investments\` DROP FOREIGN KEY \`FK_6e66166fc44c54880120b784ea4\``);
        await queryRunner.query(`ALTER TABLE \`Asset_history\` DROP FOREIGN KEY \`FK_af51c9680b9b5551a6b25e8de7f\``);
        await queryRunner.query(`DROP TABLE \`Extracts\``);
        await queryRunner.query(`DROP TABLE \`Asset_history\``);
        await queryRunner.query(`ALTER TABLE \`Investments\` CHANGE \`id_asset_historic\` \`id_historic_asset\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Investments\` ADD CONSTRAINT \`FK_c8c7aa48d3a87fccbed8b2b6e22\` FOREIGN KEY (\`id_historic_asset\`) REFERENCES \`Historic_asset\`(\`id_historic_asset\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
