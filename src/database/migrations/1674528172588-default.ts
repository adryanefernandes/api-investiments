import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674528172588 implements MigrationInterface {
    name = 'default1674528172588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Wallets\` (\`id_wallet\` int NOT NULL AUTO_INCREMENT, \`total_invested\` int NOT NULL DEFAULT '0', \`magic_number\` int NOT NULL DEFAULT '0', \`proceeds_to_receive\` int NOT NULL DEFAULT '0', \`frequency\` enum ('monthly', 'quarterly', 'semesterly', 'yearly') NOT NULL DEFAULT 'monthly', \`id_user\` int NULL, \`uuid_user\` varchar(36) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id_wallet\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Wallets\` ADD CONSTRAINT \`FK_45c13571b77f7b45438b5dbf9ff\` FOREIGN KEY (\`id_user\`, \`uuid_user\`) REFERENCES \`Users\`(\`id_user\`,\`uuid_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Wallets\` DROP FOREIGN KEY \`FK_45c13571b77f7b45438b5dbf9ff\``);
        await queryRunner.query(`DROP TABLE \`Wallets\``);
    }

}
