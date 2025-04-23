import { attributeTypeValidationSchemaReadAttributeType } from '../../../dist';

describe('attributeTypeValidationSchemaReadAttributeType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        attributeTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...attributeTypeValidationSchemaReadAttributeType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
