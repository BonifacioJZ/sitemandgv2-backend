import {MigrationInterface, QueryRunner} from "typeorm";

export class userCita1585261883876 implements MigrationInterface {
    name = 'userCita1585261883876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "citas" ("id" SERIAL NOT NULL, "tittle" character varying(100) NOT NULL, "description" text, "date" date NOT NULL, "hora" TIME NOT NULL, "hora_fin" TIME NOT NULL, "user_cita" integer, CONSTRAINT "PK_43851fd780e10030fbe5bb1b912" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "citas" ADD CONSTRAINT "FK_11d4095a0f2b0d9cea4af9656ae" FOREIGN KEY ("user_cita") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "citas" DROP CONSTRAINT "FK_11d4095a0f2b0d9cea4af9656ae"`, undefined);
        await queryRunner.query(`DROP TABLE "citas"`, undefined);
    }

}
