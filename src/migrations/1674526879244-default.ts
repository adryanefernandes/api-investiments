import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674526879244 implements MigrationInterface {
    name = 'default1674526879244'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Users\` (\`id_user\` int NOT NULL AUTO_INCREMENT, \`uuid_user\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`document\` varchar(14) NOT NULL, \`email\` varchar(255) NOT NULL, \`cellphone\` varchar(14) NULL, \`tellphone\` varchar(14) NULL, \`status\` enum ('active', 'inactive', 'pending', 'blocked') NOT NULL DEFAULT 'active', \`active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`IDX_cf5b6b34e888c0034e30210c86\` (\`document\`), UNIQUE INDEX \`IDX_3c3ab3f49a87e6ddb607f3c494\` (\`email\`), PRIMARY KEY (\`id_user\`, \`uuid_user\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_3c3ab3f49a87e6ddb607f3c494\` ON \`Users\``);
        await queryRunner.query(`DROP INDEX \`IDX_cf5b6b34e888c0034e30210c86\` ON \`Users\``);
        await queryRunner.query(`DROP TABLE \`Users\``);
    }

}
