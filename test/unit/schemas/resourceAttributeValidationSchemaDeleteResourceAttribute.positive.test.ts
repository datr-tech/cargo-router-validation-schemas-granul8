import { resourceAttributeValidationSchemaDeleteResourceAttribute } from '@app-crvsg/schemas';

describe('resourceAttributeValidationSchemaDeleteResourceAttribute', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        resourceAttributeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...resourceAttributeValidationSchemaDeleteResourceAttribute };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
