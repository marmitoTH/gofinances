import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTransactionsTable1605139957889 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'transactions',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'value',
          type: 'decimal',
          precision: 10,
          scale: 2,
          isNullable: false
        },
        {
          name: 'title',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'type',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'category_id',
          type: 'int',
          isNullable: false
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions')
  }
}
