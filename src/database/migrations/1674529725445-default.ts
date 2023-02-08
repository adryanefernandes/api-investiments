import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674529725445 implements MigrationInterface {
    name = 'default1674529725445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Asset_types\` (\`id_asset_type\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`IDX_384333e8036ff12084188aa397\` (\`title\`), PRIMARY KEY (\`id_asset_type\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Assets\` (\`id_asset\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`type\` enum ('variable', 'fixes') NOT NULL, \`risc\` enum ('low', 'moderate', 'high') NOT NULL, \`annual_income\` int NULL, \`monthly_income\` int NULL, \`due_date\` datetime NULL, \`id_asset_type\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id_asset\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Wallets\` ADD \`id_asset\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Wallets\` ADD CONSTRAINT \`FK_81706fff3c8a4f647d0a600f017\` FOREIGN KEY (\`id_asset\`) REFERENCES \`Assets\`(\`id_asset\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Assets\` ADD CONSTRAINT \`FK_5788c3e5061ce54572d8b551a92\` FOREIGN KEY (\`id_asset_type\`) REFERENCES \`Asset_types\`(\`id_asset_type\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Assets\` DROP FOREIGN KEY \`FK_5788c3e5061ce54572d8b551a92\``);
        await queryRunner.query(`ALTER TABLE \`Wallets\` DROP FOREIGN KEY \`FK_81706fff3c8a4f647d0a600f017\``);
        await queryRunner.query(`ALTER TABLE \`Wallets\` DROP COLUMN \`id_asset\``);
        await queryRunner.query(`DROP TABLE \`Assets\``);
        await queryRunner.query(`DROP INDEX \`IDX_384333e8036ff12084188aa397\` ON \`Asset_types\``);
        await queryRunner.query(`DROP TABLE \`Asset_types\``);
    }

}
