import { MigrationInterface, QueryRunner } from 'typeorm';

export class createContractAddress1662935904306 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE IF NOT EXISTS public."contract"
        (
            "id" SERIAL NOT NULL,
            "address" character varying NOT NULL,
            "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            CONSTRAINT "UQ_contract_address" UNIQUE ("address"),
            CONSTRAINT "PK_contract_id" PRIMARY KEY ("id")
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE IF EXISTS public."contract";
    `);
  }
}
