SET ROLE zxc;

INSERT INTO directory.setting
(description, setting_name, setting_value)
VALUES
    ('Признак формирования атрибута в справке для клиента',
     'STATEMENT_CLIENT',
     'false')
ON CONFLICT DO NOTHING;

-- check
-- SELECT COUNT(*) = 1 is_valid
-- FROM directory.setting
-- WHERE setting_name ='STATEMENT_CLIENT';

-- rollback
-- DELETE FROM directory.setting
-- WHERE setting_name = 'STATEMENT_CLIENT';