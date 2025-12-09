SET ROLE zxc;

INSERT INTO directory.setting
(description, setting_name, setting_value)
VALUES
    ('Признак формирования атрибута в справке для другого клиента',
     'STATEMENT_CLIENT_OTHER',
     'false')
ON CONFLICT DO NOTHING;

-- check
-- SELECT COUNT(*) = 1 is_valid
-- FROM directory.setting
-- WHERE setting_name ='STATEMENT_CLIENT_OTHER';

-- rollback
-- DELETE FROM directory.setting
-- WHERE setting_name = 'STATEMENT_CLIENT_OTHER';