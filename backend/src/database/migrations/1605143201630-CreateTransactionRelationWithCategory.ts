import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateTransactionRelationWithCategory1605143201630 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey('transactions', new TableForeignKey({
      name: 'transaction_category',
      columnNames: ['category_id'],
      referencedTableName: 'categories',
      referencedColumnNames: ['id'],
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('transactions', 'transaction_category')
  }
}
