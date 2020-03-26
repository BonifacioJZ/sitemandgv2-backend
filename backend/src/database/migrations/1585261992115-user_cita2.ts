import {MigrationInterface, QueryRunner} from "typeorm";

export class userCita21585261992115 implements MigrationInterface {
    name = 'userCita21585261992115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "citas" ADD "create_at" TIMESTAMP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "citas" ADD "update_at" TIMESTAMP NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "citas" DROP COLUMN "update_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "citas" DROP COLUMN "create_at"`, undefined);
    }

}
