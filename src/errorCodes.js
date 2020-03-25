/* eslint max-len: ["error", { "ignoreStrings": true }] */
const getErrorCodes = (errorCodes) => ({
    [errorCodes.UNKNOWN_ERROR]: 'Неизвестная ошибка',
    [errorCodes.BAD_PARAMS]: 'Неправильные параметры',
    [errorCodes.NOT_ENOUGH_MEMORY]: 'Недостаточно памяти',
    [errorCodes.DEVICE_NOT_FOUND]: 'Устройство не найдено',
    [errorCodes.DEVICE_ERROR]: 'Ошибка устройства',
    [errorCodes.TOKEN_INVALID]: 'Ошибка чтения/записи устройства. Возможно, устройство было извлечено. Попробуйте перезагрузить страницу',
    [errorCodes.CERTIFICATE_CATEGORY_BAD]: 'Недопустимый тип сертификата',
    [errorCodes.CERTIFICATE_EXISTS]: 'Сертификат уже существует на устройстве',
    [errorCodes.CERTIFICATE_NOT_FOUND]: 'Сертификат не найден',
    [errorCodes.CERTIFICATE_HASH_NOT_UNIQUE]: 'Хэш сертификата не уникален',
    [errorCodes.CA_CERTIFICATES_NOT_FOUND]: 'Корневые сертификаты не найдены',
    [errorCodes.CERTIFICATE_VERIFICATION_ERROR]: 'Ошибка проверки сертификата',
    [errorCodes.PKCS11_LOAD_FAILED]: 'Не удалось загрузить PKCS#11 библиотеку',
    [errorCodes.PIN_LENGTH_INVALID]: 'Некорректная длина PIN-кода',
    [errorCodes.PIN_INCORRECT]: 'Неверный текущий PIN-код',
    [errorCodes.PIN_LOCKED]: 'PIN-код заблокирован',
    [errorCodes.PIN_CHANGED]: 'PIN-код был изменен',
    [errorCodes.SESSION_INVALID]: 'Состояние токена изменилось',
    [errorCodes.USER_NOT_LOGGED_IN]: 'Выполните вход на устройство',
    [errorCodes.ALREADY_LOGGED_IN]: 'Вход на устройство уже был выполнен',
    [errorCodes.ATTRIBUTE_READ_ONLY]: 'Свойство не может быть изменено',
    [errorCodes.KEY_NOT_FOUND]: 'Соответствующая сертификату ключевая пара не найдена',
    [errorCodes.KEY_ID_NOT_UNIQUE]: 'Идентификатор ключевой пары не уникален',
    [errorCodes.CEK_NOT_AUTHENTIC]: 'Выбран неправильный ключ',
    [errorCodes.KEY_LABEL_NOT_UNIQUE]: 'Метка ключевой пары не уникальна',
    [errorCodes.WRONG_KEY_TYPE]: 'Неправильный тип ключа',
    [errorCodes.LICENCE_READ_ONLY]: 'Лицензия доступна только для чтения',
    [errorCodes.DATA_INVALID]: 'Неверные данные',
    [errorCodes.UNSUPPORTED_BY_TOKEN]: 'Операция не поддерживается токеном',
    [errorCodes.KEY_FUNCTION_NOT_PERMITTED]: 'Операция запрещена для данного типа ключа',
    [errorCodes.BASE64_DECODE_FAILED]: 'Ошибка декодирования даных из BASE64',
    [errorCodes.PEM_ERROR]: 'Ошибка разбора PEM',
    [errorCodes.ASN1_ERROR]: 'Ошибка декодирования ASN1 структуры',
    [errorCodes.FUNCTION_REJECTED]: 'Операция отклонена пользователем',
    [errorCodes.FUNCTION_FAILED]: 'Невозможно выполнить операцию',
    [errorCodes.MECHANISM_INVALID]: 'Указан неправильный механизм',
    [errorCodes.ATTRIBUTE_VALUE_INVALID]: 'Передан неверный атрибут',
    [errorCodes.X509_UNABLE_TO_GET_ISSUER_CERT]: 'Невозможно получить сертификат подписанта',
    [errorCodes.X509_UNABLE_TO_GET_CRL]: 'Невозможно получить CRL',
    [errorCodes.X509_UNABLE_TO_DECRYPT_CERT_SIGNATURE]: 'Невозможно расшифровать подпись сертификата',
    [errorCodes.X509_UNABLE_TO_DECRYPT_CRL_SIGNATURE]: 'Невозможно расшифровать подпись CRL',
    [errorCodes.X509_UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY]: 'Невозможно раскодировать открытый ключ эмитента',
    [errorCodes.X509_CERT_SIGNATURE_FAILURE]: 'Неверная подпись сертификата',
    [errorCodes.X509_CRL_SIGNATURE_FAILURE]: 'Неверная подпись CRL',
    [errorCodes.X509_CERT_NOT_YET_VALID]: 'Срок действия сертификата еще не начался',
    [errorCodes.X509_CRL_NOT_YET_VALID]: 'Срок действия CRL еще не начался',
    [errorCodes.X509_CERT_HAS_EXPIRED]: 'Срок действия сертификата истек',
    [errorCodes.X509_CRL_HAS_EXPIRED]: 'Срок действия CRL истек',
    [errorCodes.X509_ERROR_IN_CERT_NOT_BEFORE_FIELD]: 'Некорректные данные в поле \'notBefore\' у сертификата',
    [errorCodes.X509_ERROR_IN_CERT_NOT_AFTER_FIELD]: 'Некорректные данные в поле \'notAfter\' у сертификата',
    [errorCodes.X509_ERROR_IN_CRL_LAST_UPDATE_FIELD]: 'Некорректные данные в поле \'lastUpdate\' у CRL',
    [errorCodes.X509_ERROR_IN_CRL_NEXT_UPDATE_FIELD]: 'Некорректные данные в поле \'nextUpdate\' у CRL',
    [errorCodes.X509_OUT_OF_MEM]: 'Нехватает памяти',
    [errorCodes.X509_DEPTH_ZERO_SELF_SIGNED_CERT]: 'Недоверенный самоподписанный сертификат',
    [errorCodes.X509_SELF_SIGNED_CERT_IN_CHAIN]: 'В цепочке обнаружен недоверенный самоподписанный сертификат',
    [errorCodes.X509_UNABLE_TO_GET_ISSUER_CERT_LOCALLY]: 'Невозможно получить локальный сертификат подписанта',
    [errorCodes.X509_UNABLE_TO_VERIFY_LEAF_SIGNATURE]: 'Невозможно проверить первый сертификат',
    [errorCodes.X509_CERT_CHAIN_TOO_LONG]: 'Слишком длинная цепочка сертификатов',
    [errorCodes.X509_CERT_REVOKED]: 'Сертификат отозван',
    [errorCodes.X509_INVALID_CA]: 'Неверный корневой сертификат',
    [errorCodes.X509_INVALID_NON_CA]: 'Неверный некорневой сертфикат, помеченный как корневой',
    [errorCodes.X509_PATH_LENGTH_EXCEEDED]: 'Превышена длина пути',
    [errorCodes.X509_PROXY_PATH_LENGTH_EXCEEDED]: 'Превышина длина пути прокси',
    [errorCodes.X509_PROXY_CERTIFICATES_NOT_ALLOWED]: 'Проксирующие сертификаты недопустимы',
    [errorCodes.X509_INVALID_PURPOSE]: 'Неподдерживаемое назначение сертификата',
    [errorCodes.X509_CERT_UNTRUSTED]: 'Недоверенный сертификат',
    [errorCodes.X509_CERT_REJECTED]: 'Сертифкат отклонен',
    [errorCodes.X509_APPLICATION_VERIFICATION]: 'Ошибка проверки приложения',
    [errorCodes.X509_SUBJECT_ISSUER_MISMATCH]: 'Несовпадения субьекта и эмитента',
    [errorCodes.X509_AKID_SKID_MISMATCH]: 'Несовпадение идентификатора ключа у субьекта и доверенного центра',
    [errorCodes.X509_AKID_ISSUER_SERIAL_MISMATCH]: 'Несовпадение серийного номера субьекта и доверенного центра',
    [errorCodes.X509_KEYUSAGE_NO_CERTSIGN]: 'Ключ не может быть использован для подписи сертификатов',
    [errorCodes.X509_UNABLE_TO_GET_CRL_ISSUER]: 'Невозможно получить CRL подписанта',
    [errorCodes.X509_UNHANDLED_CRITICAL_EXTENSION]: 'Неподдерживаемое расширение',
    [errorCodes.X509_KEYUSAGE_NO_CRL_SIGN]: 'Ключ не может быть использован для подписи CRL',
    [errorCodes.X509_KEYUSAGE_NO_DIGITAL_SIGNATURE]: 'Ключ не может быть использован для цифровой подписи',
    [errorCodes.X509_UNHANDLED_CRITICAL_CRL_EXTENSION]: 'Неподдерживаемое расширение CRL',
    [errorCodes.X509_INVALID_EXTENSION]: 'Неверное или некорректное расширение сертификата',
    [errorCodes.X509_INVALID_POLICY_EXTENSION]: 'Неверное или некорректное расширение политик сертификата',
    [errorCodes.X509_NO_EXPLICIT_POLICY]: 'Явные политики отсутствуют',
    [errorCodes.X509_DIFFERENT_CRL_SCOPE]: 'Другая область CRL',
    [errorCodes.X509_UNSUPPORTED_EXTENSION_FEATURE]: 'Неподдерживаемое расширение возможностей',
    [errorCodes.X509_UNNESTED_RESOURCE]: 'RFC 3779 неправильное наследование ресурсов',
    [errorCodes.X509_PERMITTED_VIOLATION]: 'Неправильная структура сертифката',
    [errorCodes.X509_EXCLUDED_VIOLATION]: 'Неправильная структура сертфиката',
    [errorCodes.X509_SUBTREE_MINMAX]: 'Неправильная структура сертифката',
    [errorCodes.X509_UNSUPPORTED_CONSTRAINT_TYPE]: 'Неправильная структура сертфиката',
    [errorCodes.X509_UNSUPPORTED_CONSTRAINT_SYNTAX]: 'Неправильная структура сертифката',
    [errorCodes.X509_UNSUPPORTED_NAME_SYNTAX]: 'Неправильная структура сертфиката',
    [errorCodes.X509_CRL_PATH_VALIDATION_ERROR]: 'Неправильный путь CRL',
    [errorCodes.CMS_CERTIFICATE_ALREADY_PRESENT]: 'Сертификат уже используется',
    [errorCodes.CANT_HARDWARE_VERIFY_CMS]: 'Проверка множественной подписи с вычислением хеша на устройстве не поддерживается',
});

export default getErrorCodes;
