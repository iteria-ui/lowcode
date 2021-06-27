import { introspectonJson } from "./interfaces/introspectonJson";

export class constantsFoTestingGeneratorQueries {
    
public static scenario2 = {
    types: [
        {
        name: 'query_root',
        fields: [
            {
            name: 'entity1s',
            type: {
                name: 'entity'
            }
            }
        ]
        },
        {
        name: 'entity',
        fields: [
            {
            name: 'id',
            type: {
                name: 'uuid'
            }
            },
            {
            name: 'level1s',
            type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                    kind: 'OBJECT',
                    name: 'level1',
                    ofType: null
                    }
                }
                }
            }
            }
        ]
        },
        {
        name: 'level1',
        fields: [
            {
            name: 'name',
            type: {
                name: 'string'
            }
            },
            {
            name: 'level2',
            type: {
                name: 'level2'
            }
            }
        ]
        },
        {
        name: 'level2',
        fields: [
            {
            name: 'message',
            type: {
                name: 'string'
            }
            },
            {
            name: 'level1',
            type: {
                name: 'level2_level1'
            }
            }
        ]
        },
        {
        name: 'level2_level1',
        fields: [
            {
            name: 'id',
            type: {
                name: 'uuid'
            }
            }
        ]
        }
    ]
};

public static  scenario3 = {
    types: [
        {
        name: 'query_root',
        fields: [
            {
            name: 'entity1s',
            }
        ]
        }
    ]
};

public static  scenario4 = {
    types: [
        {
        name: 'query_root'
        }
    ],
    aaa: [
        'aaa'
    ]
};

public static  scenario5 = {
    types: [
      {
          "description": "query root",
          "enumValues": null,
          "fields": [
              {

                  "args": [
                      {
                          "name": "distinct_on",
                          "defaultValue": null,
                          "type": {
                              "kind": "LIST",
                              "name": null,
                              "ofType": {
                                  "kind": "NON_NULL",
                                  "name": null,
                                  "ofType": {
                                      "kind": "ENUM",
                                      "name": "level1_select_column",
                                      "ofType": null
                                  }
                              }
                          },
                          "description": "distinct select on columns"
                      },
                      {
                          "name": "limit",
                          "defaultValue": null,
                          "type": {
                              "kind": "SCALAR",
                              "name": "Int",
                              "ofType": null
                          },
                          "description": "limit the number of rows returned"
                      },
                      {
                          "name": "offset",
                          "defaultValue": null,
                          "type": {
                              "kind": "SCALAR",
                              "name": "Int",
                              "ofType": null
                          },
                          "description": "skip the first n rows. Use only with order_by"
                      },
                      {
                          "name": "order_by",
                          "defaultValue": null,
                          "type": {
                              "kind": "LIST",
                              "name": null,
                              "ofType": {
                                  "kind": "NON_NULL",
                                  "name": null,
                                  "ofType": {
                                      "kind": "INPUT_OBJECT",
                                      "name": "level1_order_by",
                                      "ofType": null
                                  }
                              }
                          },
                          "description": "sort the rows by one or more columns"
                      },
                      {
                          "name": "where",
                          "defaultValue": null,
                          "type": {
                              "kind": "INPUT_OBJECT",
                              "name": "level1_bool_exp",
                              "ofType": null
                          },
                          "description": "filter the rows returned"
                      }
                  ],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "rootLevel1s",
                  "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "OBJECT",
                                  "name": "level1",
                                  "ofType": null
                              }
                          }
                      }
                  },
                  "description": "fetch data from the table: \"level1\""
              },
              {
                  "args": [
                      {
                          "name": "distinct_on",
                          "defaultValue": null,
                          "type": {
                              "kind": "LIST",
                              "name": null,
                              "ofType": {
                                  "kind": "NON_NULL",
                                  "name": null,
                                  "ofType": {
                                      "kind": "ENUM",
                                      "name": "level2_select_column",
                                      "ofType": null
                                  }
                              }
                          },
                          "description": "distinct select on columns"
                      },
                      {
                          "name": "limit",
                          "defaultValue": null,
                          "type": {
                              "kind": "SCALAR",
                              "name": "Int",
                              "ofType": null
                          },
                          "description": "limit the number of rows returned"
                      },
                      {
                          "name": "offset",
                          "defaultValue": null,
                          "type": {
                              "kind": "SCALAR",
                              "name": "Int",
                              "ofType": null
                          },
                          "description": "skip the first n rows. Use only with order_by"
                      },
                      {
                          "name": "order_by",
                          "defaultValue": null,
                          "type": {
                              "kind": "LIST",
                              "name": null,
                              "ofType": {
                                  "kind": "NON_NULL",
                                  "name": null,
                                  "ofType": {
                                      "kind": "INPUT_OBJECT",
                                      "name": "level2_order_by",
                                      "ofType": null
                                  }
                              }
                          },
                          "description": "sort the rows by one or more columns"
                      },
                      {
                          "name": "where",
                          "defaultValue": null,
                          "type": {
                              "kind": "INPUT_OBJECT",
                              "name": "level2_bool_exp",
                              "ofType": null
                          },
                          "description": "filter the rows returned"
                      }
                  ],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "rootLevel2s",
                  "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "OBJECT",
                                  "name": "level2",
                                  "ofType": null
                              }
                          }
                      }
                  },
                  "description": "fetch data from the table: \"level2\""
              }
          ],
          "inputFields": null,
          "interfaces": [],
          "kind": "OBJECT",
          "name": "query_root",
          "possibleTypes": null
      },
      {
          "inputFields": null,
          "kind": "OBJECT",
          "possibleTypes": null,
          "interfaces": [],
          "name": "level1",
          "enumValues": null,
          "description": "columns and relationships of \"level1\"",
          "fields": [
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "bigint1",
                  "type": {
                      "kind": "SCALAR",
                      "name": "bigint",
                      "ofType": null
                  },
                  "description": null
              },
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "bool1",
                  "type": {
                      "kind": "SCALAR",
                      "name": "Boolean",
                      "ofType": null
                  },
                  "description": null
              },
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "date1",
                  "type": {
                      "kind": "SCALAR",
                      "name": "date",
                      "ofType": null
                  },
                  "description": null
              },
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "id",
                  "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "SCALAR",
                          "name": "uuid",
                          "ofType": null
                      }
                  },
                  "description": null
              },
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "int1",
                  "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                  },
                  "description": null
              },
              {
                  "args": [
                      {
                          "name": "path",
                          "defaultValue": null,
                          "type": {
                              "kind": "SCALAR",
                              "name": "String",
                              "ofType": null
                          },
                          "description": "JSON select path"
                      }
                  ],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "jsonb1",
                  "type": {
                      "kind": "SCALAR",
                      "name": "jsonb",
                      "ofType": null
                  },
                  "description": null
              },
              {
                  "args": [
                      {
                          "name": "distinct_on",
                          "defaultValue": null,
                          "type": {
                              "kind": "LIST",
                              "name": null,
                              "ofType": {
                                  "kind": "NON_NULL",
                                  "name": null,
                                  "ofType": {
                                      "kind": "ENUM",
                                      "name": "level2_select_column",
                                      "ofType": null
                                  }
                              }
                          },
                          "description": "distinct select on columns"
                      },
                      {
                          "name": "limit",
                          "defaultValue": null,
                          "type": {
                              "kind": "SCALAR",
                              "name": "Int",
                              "ofType": null
                          },
                          "description": "limit the number of rows returned"
                      },
                      {
                          "name": "offset",
                          "defaultValue": null,
                          "type": {
                              "kind": "SCALAR",
                              "name": "Int",
                              "ofType": null
                          },
                          "description": "skip the first n rows. Use only with order_by"
                      },
                      {
                          "name": "order_by",
                          "defaultValue": null,
                          "type": {
                              "kind": "LIST",
                              "name": null,
                              "ofType": {
                                  "kind": "NON_NULL",
                                  "name": null,
                                  "ofType": {
                                      "kind": "INPUT_OBJECT",
                                      "name": "level2_order_by",
                                      "ofType": null
                                  }
                              }
                          },
                          "description": "sort the rows by one or more columns"
                      },
                      {
                          "name": "where",
                          "defaultValue": null,
                          "type": {
                              "kind": "INPUT_OBJECT",
                              "name": "level2_bool_exp",
                              "ofType": null
                          },
                          "description": "filter the rows returned"
                      }
                  ],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "level2s",
                  "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "OBJECT",
                                  "name": "level2",
                                  "ofType": null
                              }
                          }
                      }
                  },
                  "description": "An array relationship"
              },
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "numberic1",
                  "type": {
                      "kind": "SCALAR",
                      "name": "numeric",
                      "ofType": null
                  },
                  "description": null
              },
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "seq",
                  "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "SCALAR",
                          "name": "Int",
                          "ofType": null
                      }
                  },
                  "description": null
              },
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "time1",
                  "type": {
                      "kind": "SCALAR",
                      "name": "timetz",
                      "ofType": null
                  },
                  "description": null
              },
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "time2",
                  "type": {
                      "kind": "SCALAR",
                      "name": "time",
                      "ofType": null
                  },
                  "description": null
              },
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "timestamp1",
                  "type": {
                      "kind": "SCALAR",
                      "name": "timestamptz",
                      "ofType": null
                  },
                  "description": null
              },
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "timestamp2",
                  "type": {
                      "kind": "SCALAR",
                      "name": "timestamp",
                      "ofType": null
                  },
                  "description": null
              },
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "title",
                  "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "SCALAR",
                          "name": "String",
                          "ofType": null
                      }
                  },
                  "description": null
              }
          ]
      },
      {
          "inputFields": null,
          "kind": "OBJECT",
          "possibleTypes": null,
          "interfaces": [],
          "name": "level2",
          "enumValues": null,
          "description": "columns and relationships of \"level2\"",
          "fields": [
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "id",
                  "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "SCALAR",
                          "name": "uuid",
                          "ofType": null
                      }
                  },
                  "description": null
              },
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "level1",
                  "type": {
                      "kind": "OBJECT",
                      "name": "level1",
                      "ofType": null
                  },
                  "description": "An object relationship"
              },
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "level1_id",
                  "type": {
                      "kind": "SCALAR",
                      "name": "uuid",
                      "ofType": null
                  },
                  "description": null
              },
              {
                  "args": [
                      {
                          "name": "distinct_on",
                          "defaultValue": null,
                          "type": {
                              "kind": "LIST",
                              "name": null,
                              "ofType": {
                                  "kind": "NON_NULL",
                                  "name": null,
                                  "ofType": {
                                      "kind": "ENUM",
                                      "name": "level3_select_column",
                                      "ofType": null
                                  }
                              }
                          },
                          "description": "distinct select on columns"
                      },
                      {
                          "name": "limit",
                          "defaultValue": null,
                          "type": {
                              "kind": "SCALAR",
                              "name": "Int",
                              "ofType": null
                          },
                          "description": "limit the number of rows returned"
                      },
                      {
                          "name": "offset",
                          "defaultValue": null,
                          "type": {
                              "kind": "SCALAR",
                              "name": "Int",
                              "ofType": null
                          },
                          "description": "skip the first n rows. Use only with order_by"
                      },
                      {
                          "name": "order_by",
                          "defaultValue": null,
                          "type": {
                              "kind": "LIST",
                              "name": null,
                              "ofType": {
                                  "kind": "NON_NULL",
                                  "name": null,
                                  "ofType": {
                                      "kind": "INPUT_OBJECT",
                                      "name": "level3_order_by",
                                      "ofType": null
                                  }
                              }
                          },
                          "description": "sort the rows by one or more columns"
                      },
                      {
                          "name": "where",
                          "defaultValue": null,
                          "type": {
                              "kind": "INPUT_OBJECT",
                              "name": "level3_bool_exp",
                              "ofType": null
                          },
                          "description": "filter the rows returned"
                      }
                  ],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "level3s",
                  "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "LIST",
                          "name": null,
                          "ofType": {
                              "kind": "NON_NULL",
                              "name": null,
                              "ofType": {
                                  "kind": "OBJECT",
                                  "name": "level3",
                                  "ofType": null
                              }
                          }
                      }
                  },
                  "description": "An array relationship"
              },
              {
                  "args": [],
                  "isDeprecated": false,
                  "deprecationReason": null,
                  "name": "title",
                  "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                          "kind": "SCALAR",
                          "name": "String",
                          "ofType": null
                      }
                  },
                  "description": null
              }
          ]
      }       
    ]
  }

public static  scenario6 = {
    "inputFields": null,
    "kind": "OBJECT",
    "possibleTypes": null,
    "interfaces": [],
    "name": "level1",
    "enumValues": null,
    "description": "columns and relationships of \"level1\"",
    "fields": [
        {
            "args": [],
            "isDeprecated": false,
            "deprecationReason": null,
            "name": "bigint1",
            "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
            },
            "description": null
        },
        {
            "args": [],
            "isDeprecated": false,
            "deprecationReason": null,
            "name": "bool1",
            "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
            },
            "description": null
        },
        {
            "args": [],
            "isDeprecated": false,
            "deprecationReason": null,
            "name": "date1",
            "type": {
                "kind": "SCALAR",
                "name": "date",
                "ofType": null
            },
            "description": null
        },
        {
            "args": [],
            "isDeprecated": false,
            "deprecationReason": null,
            "name": "id",
            "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid",
                    "ofType": null
                }
            },
            "description": null
        },
        {
            "args": [],
            "isDeprecated": false,
            "deprecationReason": null,
            "name": "int1",
            "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
            },
            "description": null
        },
        {
            "args": [
                {
                    "name": "path",
                    "defaultValue": null,
                    "type": {
                        "kind": "SCALAR",
                        "name": "String",
                        "ofType": null
                    },
                    "description": "JSON select path"
                }
            ],
            "isDeprecated": false,
            "deprecationReason": null,
            "name": "jsonb1",
            "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
            },
            "description": null
        },
        {
            "args": [
                {
                    "name": "distinct_on",
                    "defaultValue": null,
                    "type": {
                        "kind": "LIST",
                        "name": null,
                        "ofType": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "ENUM",
                                "name": "level2_select_column",
                                "ofType": null
                            }
                        }
                    },
                    "description": "distinct select on columns"
                },
                {
                    "name": "limit",
                    "defaultValue": null,
                    "type": {
                        "kind": "SCALAR",
                        "name": "Int",
                        "ofType": null
                    },
                    "description": "limit the number of rows returned"
                },
                {
                    "name": "offset",
                    "defaultValue": null,
                    "type": {
                        "kind": "SCALAR",
                        "name": "Int",
                        "ofType": null
                    },
                    "description": "skip the first n rows. Use only with order_by"
                },
                {
                    "name": "order_by",
                    "defaultValue": null,
                    "type": {
                        "kind": "LIST",
                        "name": null,
                        "ofType": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level2_order_by",
                                "ofType": null
                            }
                        }
                    },
                    "description": "sort the rows by one or more columns"
                },
                {
                    "name": "where",
                    "defaultValue": null,
                    "type": {
                        "kind": "INPUT_OBJECT",
                        "name": "level2_bool_exp",
                        "ofType": null
                    },
                    "description": "filter the rows returned"
                }
            ],
            "isDeprecated": false,
            "deprecationReason": null,
            "name": "level2s",
            "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                        "kind": "NON_NULL",
                        "name": null,
                        "ofType": {
                            "kind": "OBJECT",
                            "name": "level2",
                            "ofType": null
                        }
                    }
                }
            },
            "description": "An array relationship"
        },
        {
            "args": [],
            "isDeprecated": false,
            "deprecationReason": null,
            "name": "numberic1",
            "type": {
                "kind": "SCALAR",
                "name": "numeric",
                "ofType": null
            },
            "description": null
        },
        {
            "args": [],
            "isDeprecated": false,
            "deprecationReason": null,
            "name": "seq",
            "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                }
            },
            "description": null
        },
        {
            "args": [],
            "isDeprecated": false,
            "deprecationReason": null,
            "name": "time1",
            "type": {
                "kind": "SCALAR",
                "name": "timetz",
                "ofType": null
            },
            "description": null
        },
        {
            "args": [],
            "isDeprecated": false,
            "deprecationReason": null,
            "name": "time2",
            "type": {
                "kind": "SCALAR",
                "name": "time",
                "ofType": null
            },
            "description": null
        },
        {
            "args": [],
            "isDeprecated": false,
            "deprecationReason": null,
            "name": "timestamp1",
            "type": {
                "kind": "SCALAR",
                "name": "timestamptz",
                "ofType": null
            },
            "description": null
        },
        {
            "args": [],
            "isDeprecated": false,
            "deprecationReason": null,
            "name": "timestamp2",
            "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
            },
            "description": null
        },
        {
            "args": [],
            "isDeprecated": false,
            "deprecationReason": null,
            "name": "title",
            "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                }
            },
            "description": null
        }
    ]
}

public static  scenario7:introspectonJson = {
    "__schema": {
        "directives": [
            {
                "args": [
                    {
                        "name": "if",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Boolean",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ],
                "name": "include",
                "locations": [
                    "FIELD",
                    "FRAGMENT_SPREAD",
                    "INLINE_FRAGMENT"
                ],
                "description": null
            },
            {
                "args": [
                    {
                        "name": "if",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Boolean",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ],
                "name": "skip",
                "locations": [
                    "FIELD",
                    "FRAGMENT_SPREAD",
                    "INLINE_FRAGMENT"
                ],
                "description": null
            }
        ],
        "queryType": {
            "name": "query_root"
        },
        "subscriptionType": {
            "name": "subscription_root"
        },
        "types": [
            {
                "inputFields": null,
                "kind": "SCALAR",
                "possibleTypes": null,
                "interfaces": null,
                "name": "Boolean",
                "enumValues": null,
                "description": null,
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_eq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_in",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "Boolean",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_is_null",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_neq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_nin",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "Boolean",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "Boolean_comparison_exp",
                "enumValues": null,
                "description": "expression to compare columns of type Boolean. All fields are combined with logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "SCALAR",
                "possibleTypes": null,
                "interfaces": null,
                "name": "Float",
                "enumValues": null,
                "description": null,
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "SCALAR",
                "possibleTypes": null,
                "interfaces": null,
                "name": "ID",
                "enumValues": null,
                "description": null,
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "SCALAR",
                "possibleTypes": null,
                "interfaces": null,
                "name": "Int",
                "enumValues": null,
                "description": null,
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_eq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_in",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_is_null",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_neq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_nin",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "Int_comparison_exp",
                "enumValues": null,
                "description": "expression to compare columns of type Int. All fields are combined with logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "SCALAR",
                "possibleTypes": null,
                "interfaces": null,
                "name": "String",
                "enumValues": null,
                "description": null,
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_eq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_ilike",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_in",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "String",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_is_null",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_like",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_neq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_nilike",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_nin",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "String",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_nlike",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_nsimilar",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_similar",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "String_comparison_exp",
                "enumValues": null,
                "description": "expression to compare columns of type String. All fields are combined with logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "__Directive",
                "enumValues": null,
                "description": null,
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "args",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "__InputValue",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "description",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "locations",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "ENUM",
                                        "name": "__DirectiveLocation",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "name",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "__DirectiveLocation",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "ARGUMENT_DEFINITION",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "ENUM",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "ENUM_VALUE",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "FIELD",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "FIELD_DEFINITION",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "FRAGMENT_DEFINITION",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "FRAGMENT_SPREAD",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "INLINE_FRAGMENT",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "INPUT_FIELD_DEFINITION",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "INPUT_OBJECT",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "INTERFACE",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "MUTATION",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "OBJECT",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "QUERY",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "SCALAR",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "SCHEMA",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "SUBSCRIPTION",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "UNION",
                        "description": null
                    }
                ],
                "description": null,
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "__EnumValue",
                "enumValues": null,
                "description": null,
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "deprecationReason",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "description",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "isDeprecated",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Boolean",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "name",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "__Field",
                "enumValues": null,
                "description": null,
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "args",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "__InputValue",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "deprecationReason",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "description",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "isDeprecated",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Boolean",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "name",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "type",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "__Type",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "__InputValue",
                "enumValues": null,
                "description": null,
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "defaultValue",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "description",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "name",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "type",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "__Type",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "__Schema",
                "enumValues": null,
                "description": null,
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "directives",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "__Directive",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "mutationType",
                        "type": {
                            "kind": "OBJECT",
                            "name": "__Type",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "queryType",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "__Type",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "subscriptionType",
                        "type": {
                            "kind": "OBJECT",
                            "name": "__Type",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "types",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "__Type",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "__Type",
                "enumValues": null,
                "description": null,
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "description",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [
                            {
                                "name": "includeDeprecated",
                                "defaultValue": "false",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Boolean",
                                    "ofType": null
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "enumValues",
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "OBJECT",
                                    "name": "__EnumValue",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [
                            {
                                "name": "includeDeprecated",
                                "defaultValue": "false",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Boolean",
                                    "ofType": null
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "fields",
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "OBJECT",
                                    "name": "__Field",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "inputFields",
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "OBJECT",
                                    "name": "__InputValue",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "interfaces",
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "OBJECT",
                                    "name": "__Type",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "kind",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "ENUM",
                                "name": "__TypeKind",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "name",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "ofType",
                        "type": {
                            "kind": "OBJECT",
                            "name": "__Type",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "possibleTypes",
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "OBJECT",
                                    "name": "__Type",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "__TypeKind",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "ENUM",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "INPUT_OBJECT",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "INTERFACE",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "LIST",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "NON_NULL",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "OBJECT",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "SCALAR",
                        "description": null
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "UNION",
                        "description": null
                    }
                ],
                "description": null,
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "SCALAR",
                "possibleTypes": null,
                "interfaces": null,
                "name": "bigint",
                "enumValues": null,
                "description": null,
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_eq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "bigint",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "bigint",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "bigint",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_in",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "bigint",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_is_null",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "bigint",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "bigint",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_neq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "bigint",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_nin",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "bigint",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "bigint_comparison_exp",
                "enumValues": null,
                "description": "expression to compare columns of type bigint. All fields are combined with logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "SCALAR",
                "possibleTypes": null,
                "interfaces": null,
                "name": "date",
                "enumValues": null,
                "description": null,
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_eq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "date",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "date",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "date",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_in",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "date",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_is_null",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "date",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "date",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_neq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "date",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_nin",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "date",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "date_comparison_exp",
                "enumValues": null,
                "description": "expression to compare columns of type date. All fields are combined with logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "SCALAR",
                "possibleTypes": null,
                "interfaces": null,
                "name": "jsonb",
                "enumValues": null,
                "description": null,
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_contained_in",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "jsonb",
                            "ofType": null
                        },
                        "description": "is the column contained in the given json value"
                    },
                    {
                        "name": "_contains",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "jsonb",
                            "ofType": null
                        },
                        "description": "does the column contain the given json value at the top level"
                    },
                    {
                        "name": "_eq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "jsonb",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "jsonb",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "jsonb",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_has_key",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": "does the string exist as a top-level key in the column"
                    },
                    {
                        "name": "_has_keys_all",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "String",
                                    "ofType": null
                                }
                            }
                        },
                        "description": "do all of these strings exist as top-level keys in the column"
                    },
                    {
                        "name": "_has_keys_any",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "String",
                                    "ofType": null
                                }
                            }
                        },
                        "description": "do any of these strings exist as top-level keys in the column"
                    },
                    {
                        "name": "_in",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "jsonb",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_is_null",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "jsonb",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "jsonb",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_neq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "jsonb",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_nin",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "jsonb",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "jsonb_comparison_exp",
                "enumValues": null,
                "description": "expression to compare columns of type jsonb. All fields are combined with logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level1",
                "enumValues": null,
                "description": "columns and relationships of \"level1\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bigint1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "bigint",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bool1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "date1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "date",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "uuid",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "int1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [
                            {
                                "name": "path",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "String",
                                    "ofType": null
                                },
                                "description": "JSON select path"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "jsonb1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "jsonb",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level2_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level2_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level2_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level2s",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level2",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "An array relationship"
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "numberic1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "numeric",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "seq",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Int",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "time1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "timetz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "time2",
                        "type": {
                            "kind": "SCALAR",
                            "name": "time",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "timestamp1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamptz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "timestamp2",
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level1_aggregate",
                "enumValues": null,
                "description": "aggregated selection of \"level1\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "aggregate",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1_aggregate_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "nodes",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level1",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level1_aggregate_fields",
                "enumValues": null,
                "description": "aggregate fields of \"level1\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "avg",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1_avg_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [
                            {
                                "name": "columns",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level1_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": null
                            },
                            {
                                "name": "distinct",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Boolean",
                                    "ofType": null
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "count",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "max",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1_max_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "min",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1_min_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "stddev",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1_stddev_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "stddev_pop",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1_stddev_pop_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "stddev_samp",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1_stddev_samp_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "sum",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1_sum_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "var_pop",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1_var_pop_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "var_samp",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1_var_samp_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "variance",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1_variance_fields",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "avg",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_avg_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "count",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "max",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_max_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "min",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_min_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "stddev",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_stddev_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "stddev_pop",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_stddev_pop_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "stddev_samp",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_stddev_samp_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "sum",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_sum_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "var_pop",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_var_pop_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "var_samp",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_var_samp_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "variance",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_variance_order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_aggregate_order_by",
                "enumValues": null,
                "description": "order by aggregate values of table \"level1\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "jsonb1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "jsonb",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_append_input",
                "enumValues": null,
                "description": "append existing jsonb value of filtered columns with new jsonb value",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "data",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level1_insert_input",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "on_conflict",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_on_conflict",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_arr_rel_insert_input",
                "enumValues": null,
                "description": "input type for inserting array relation for remote table \"level1\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level1_avg_fields",
                "enumValues": null,
                "description": "aggregate avg on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bigint1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "int1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "numberic1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "seq",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_avg_order_by",
                "enumValues": null,
                "description": "order by avg() on columns of table \"level1\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_and",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level1_bool_exp",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_not",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_or",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level1_bool_exp",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "bigint_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "bool1",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "Boolean_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "date1",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "date_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "uuid_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "Int_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "jsonb1",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "jsonb_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level2s",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level2_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "numeric_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "Int_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "time1",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "timetz_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "time2",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "time_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "timestamp1",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "timestamptz_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "timestamp2",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "timestamp_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "String_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_bool_exp",
                "enumValues": null,
                "description": "Boolean expression to filter rows from the table \"level1\". All fields are combined with a logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_constraint",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level1_pkey",
                        "description": "unique or primary key constraint"
                    }
                ],
                "description": "unique or primary key constraints on table \"level1\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "jsonb1",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_delete_at_path_input",
                "enumValues": null,
                "description": "delete the field or element with specified path (for JSON arrays, negative integers count from the end)",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "jsonb1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_delete_elem_input",
                "enumValues": null,
                "description": "delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "jsonb1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_delete_key_input",
                "enumValues": null,
                "description": "delete key/value pair or string element. key/value pairs are matched based on their key value",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "bigint",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "numeric",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_inc_input",
                "enumValues": null,
                "description": "input type for incrementing integer column in table \"level1\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "bigint",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "bool1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "date1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "date",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "jsonb1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "jsonb",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level2s",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level2_arr_rel_insert_input",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "numeric",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "time1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timetz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "time2",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "time",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "timestamp1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamptz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "timestamp2",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_insert_input",
                "enumValues": null,
                "description": "input type for inserting data into table \"level1\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level1_max_fields",
                "enumValues": null,
                "description": "aggregate max on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bigint1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "bigint",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "date1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "date",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "int1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "numberic1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "numeric",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "seq",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "time1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "timetz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "timestamp1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamptz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "timestamp2",
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "date1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "time1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "timestamp1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "timestamp2",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_max_order_by",
                "enumValues": null,
                "description": "order by max() on columns of table \"level1\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level1_min_fields",
                "enumValues": null,
                "description": "aggregate min on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bigint1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "bigint",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "date1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "date",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "int1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "numberic1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "numeric",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "seq",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "time1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "timetz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "timestamp1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamptz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "timestamp2",
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "date1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "time1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "timestamp1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "timestamp2",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_min_order_by",
                "enumValues": null,
                "description": "order by min() on columns of table \"level1\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level1_mutation_response",
                "enumValues": null,
                "description": "response of any mutation on the table \"level1\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "affected_rows",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Int",
                                "ofType": null
                            }
                        },
                        "description": "number of affected rows by the mutation"
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "returning",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level1",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "data of the affected rows by the mutation"
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "data",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level1_insert_input",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "on_conflict",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_on_conflict",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_obj_rel_insert_input",
                "enumValues": null,
                "description": "input type for inserting object relation for remote table \"level1\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "constraint",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "ENUM",
                                "name": "level1_constraint",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "update_columns",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "ENUM",
                                        "name": "level1_update_column",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "where",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_on_conflict",
                "enumValues": null,
                "description": "on conflict condition type for table \"level1\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "bool1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "date1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "jsonb1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level2s_aggregate",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level2_aggregate_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "time1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "time2",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "timestamp1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "timestamp2",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_order_by",
                "enumValues": null,
                "description": "ordering options when selecting data from \"level1\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "uuid",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_pk_columns_input",
                "enumValues": null,
                "description": "primary key columns input for table: \"level1\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "jsonb1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "jsonb",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_prepend_input",
                "enumValues": null,
                "description": "prepend existing jsonb value of filtered columns with new jsonb value",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_select_column",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bigint1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bool1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "date1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "int1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "jsonb1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "numberic1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "seq",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "time1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "time2",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "timestamp1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "timestamp2",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "description": "column name"
                    }
                ],
                "description": "select columns of table \"level1\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "bigint",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "bool1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "date1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "date",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "jsonb1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "jsonb",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "numeric",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "time1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timetz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "time2",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "time",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "timestamp1",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamptz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "timestamp2",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_set_input",
                "enumValues": null,
                "description": "input type for updating data in table \"level1\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level1_stddev_fields",
                "enumValues": null,
                "description": "aggregate stddev on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bigint1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "int1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "numberic1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "seq",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_stddev_order_by",
                "enumValues": null,
                "description": "order by stddev() on columns of table \"level1\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level1_stddev_pop_fields",
                "enumValues": null,
                "description": "aggregate stddev_pop on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bigint1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "int1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "numberic1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "seq",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_stddev_pop_order_by",
                "enumValues": null,
                "description": "order by stddev_pop() on columns of table \"level1\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level1_stddev_samp_fields",
                "enumValues": null,
                "description": "aggregate stddev_samp on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bigint1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "int1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "numberic1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "seq",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_stddev_samp_order_by",
                "enumValues": null,
                "description": "order by stddev_samp() on columns of table \"level1\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level1_sum_fields",
                "enumValues": null,
                "description": "aggregate sum on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bigint1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "bigint",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "int1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "numberic1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "numeric",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "seq",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_sum_order_by",
                "enumValues": null,
                "description": "order by sum() on columns of table \"level1\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_update_column",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bigint1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bool1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "date1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "int1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "jsonb1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "numberic1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "seq",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "time1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "time2",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "timestamp1",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "timestamp2",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "description": "column name"
                    }
                ],
                "description": "update columns of table \"level1\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level1_var_pop_fields",
                "enumValues": null,
                "description": "aggregate var_pop on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bigint1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "int1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "numberic1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "seq",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_var_pop_order_by",
                "enumValues": null,
                "description": "order by var_pop() on columns of table \"level1\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level1_var_samp_fields",
                "enumValues": null,
                "description": "aggregate var_samp on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bigint1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "int1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "numberic1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "seq",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_var_samp_order_by",
                "enumValues": null,
                "description": "order by var_samp() on columns of table \"level1\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level1_variance_fields",
                "enumValues": null,
                "description": "aggregate variance on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "bigint1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "int1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "numberic1",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "seq",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Float",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "bigint1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "int1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "numberic1",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "seq",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level1_variance_order_by",
                "enumValues": null,
                "description": "order by variance() on columns of table \"level1\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level2",
                "enumValues": null,
                "description": "columns and relationships of \"level2\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "uuid",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level1",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1",
                            "ofType": null
                        },
                        "description": "An object relationship"
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level1_id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level3_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level3_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level3_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level3s",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level3",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "An array relationship"
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level3_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level3_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level3_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level3s_aggregate",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "level3_aggregate",
                                "ofType": null
                            }
                        },
                        "description": "An aggregated array relationship"
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level2_aggregate",
                "enumValues": null,
                "description": "aggregated selection of \"level2\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "aggregate",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level2_aggregate_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "nodes",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level2",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level2_aggregate_fields",
                "enumValues": null,
                "description": "aggregate fields of \"level2\"",
                "fields": [
                    {
                        "args": [
                            {
                                "name": "columns",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level2_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": null
                            },
                            {
                                "name": "distinct",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Boolean",
                                    "ofType": null
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "count",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "max",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level2_max_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "min",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level2_min_fields",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "count",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "max",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level2_max_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "min",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level2_min_order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level2_aggregate_order_by",
                "enumValues": null,
                "description": "order by aggregate values of table \"level2\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "data",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level2_insert_input",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "on_conflict",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level2_on_conflict",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level2_arr_rel_insert_input",
                "enumValues": null,
                "description": "input type for inserting array relation for remote table \"level2\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_and",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level2_bool_exp",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_not",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level2_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_or",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level2_bool_exp",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "uuid_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level1",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level1_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "uuid_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level3s",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level3_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "String_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level2_bool_exp",
                "enumValues": null,
                "description": "Boolean expression to filter rows from the table \"level2\". All fields are combined with a logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level2_constraint",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level2_pkey",
                        "description": "unique or primary key constraint"
                    }
                ],
                "description": "unique or primary key constraints on table \"level2\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level1",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_obj_rel_insert_input",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level1_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level3s",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level3_arr_rel_insert_input",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level2_insert_input",
                "enumValues": null,
                "description": "input type for inserting data into table \"level2\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level2_max_fields",
                "enumValues": null,
                "description": "aggregate max on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level1_id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level1_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level2_max_order_by",
                "enumValues": null,
                "description": "order by max() on columns of table \"level2\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level2_min_fields",
                "enumValues": null,
                "description": "aggregate min on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level1_id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level1_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level2_min_order_by",
                "enumValues": null,
                "description": "order by min() on columns of table \"level2\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level2_mutation_response",
                "enumValues": null,
                "description": "response of any mutation on the table \"level2\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "affected_rows",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Int",
                                "ofType": null
                            }
                        },
                        "description": "number of affected rows by the mutation"
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "returning",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level2",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "data of the affected rows by the mutation"
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "data",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level2_insert_input",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "on_conflict",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level2_on_conflict",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level2_obj_rel_insert_input",
                "enumValues": null,
                "description": "input type for inserting object relation for remote table \"level2\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "constraint",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "ENUM",
                                "name": "level2_constraint",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "update_columns",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "ENUM",
                                        "name": "level2_update_column",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "where",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level2_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level2_on_conflict",
                "enumValues": null,
                "description": "on conflict condition type for table \"level2\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level1",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level1_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level1_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level3s_aggregate",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level3_aggregate_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level2_order_by",
                "enumValues": null,
                "description": "ordering options when selecting data from \"level2\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "uuid",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level2_pk_columns_input",
                "enumValues": null,
                "description": "primary key columns input for table: \"level2\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level2_select_column",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level1_id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "description": "column name"
                    }
                ],
                "description": "select columns of table \"level2\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level1_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level2_set_input",
                "enumValues": null,
                "description": "input type for updating data in table \"level2\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level2_update_column",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level1_id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "description": "column name"
                    }
                ],
                "description": "update columns of table \"level2\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level3",
                "enumValues": null,
                "description": "columns and relationships of \"level3\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "uuid",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level2",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level2",
                            "ofType": null
                        },
                        "description": "An object relationship"
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level2_id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level4_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level4_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level4_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level4s",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level4",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "An array relationship"
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level4_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level4_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level4_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level4s_aggregate",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "level4_aggregate",
                                "ofType": null
                            }
                        },
                        "description": "An aggregated array relationship"
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level3_aggregate",
                "enumValues": null,
                "description": "aggregated selection of \"level3\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "aggregate",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level3_aggregate_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "nodes",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level3",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level3_aggregate_fields",
                "enumValues": null,
                "description": "aggregate fields of \"level3\"",
                "fields": [
                    {
                        "args": [
                            {
                                "name": "columns",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level3_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": null
                            },
                            {
                                "name": "distinct",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Boolean",
                                    "ofType": null
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "count",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "max",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level3_max_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "min",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level3_min_fields",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "count",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "max",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level3_max_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "min",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level3_min_order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level3_aggregate_order_by",
                "enumValues": null,
                "description": "order by aggregate values of table \"level3\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "data",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level3_insert_input",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "on_conflict",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level3_on_conflict",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level3_arr_rel_insert_input",
                "enumValues": null,
                "description": "input type for inserting array relation for remote table \"level3\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_and",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level3_bool_exp",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_not",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level3_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_or",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level3_bool_exp",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "uuid_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level2",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level2_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level2_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "uuid_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level4s",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level4_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "String_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level3_bool_exp",
                "enumValues": null,
                "description": "Boolean expression to filter rows from the table \"level3\". All fields are combined with a logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level3_constraint",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level3_pkey",
                        "description": "unique or primary key constraint"
                    }
                ],
                "description": "unique or primary key constraints on table \"level3\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level2",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level2_obj_rel_insert_input",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level2_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level4s",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level4_arr_rel_insert_input",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level3_insert_input",
                "enumValues": null,
                "description": "input type for inserting data into table \"level3\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level3_max_fields",
                "enumValues": null,
                "description": "aggregate max on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level2_id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level2_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level3_max_order_by",
                "enumValues": null,
                "description": "order by max() on columns of table \"level3\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level3_min_fields",
                "enumValues": null,
                "description": "aggregate min on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level2_id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level2_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level3_min_order_by",
                "enumValues": null,
                "description": "order by min() on columns of table \"level3\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level3_mutation_response",
                "enumValues": null,
                "description": "response of any mutation on the table \"level3\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "affected_rows",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Int",
                                "ofType": null
                            }
                        },
                        "description": "number of affected rows by the mutation"
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "returning",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level3",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "data of the affected rows by the mutation"
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "data",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level3_insert_input",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "on_conflict",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level3_on_conflict",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level3_obj_rel_insert_input",
                "enumValues": null,
                "description": "input type for inserting object relation for remote table \"level3\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "constraint",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "ENUM",
                                "name": "level3_constraint",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "update_columns",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "ENUM",
                                        "name": "level3_update_column",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "where",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level3_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level3_on_conflict",
                "enumValues": null,
                "description": "on conflict condition type for table \"level3\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level2",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level2_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level2_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level4s_aggregate",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level4_aggregate_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level3_order_by",
                "enumValues": null,
                "description": "ordering options when selecting data from \"level3\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "uuid",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level3_pk_columns_input",
                "enumValues": null,
                "description": "primary key columns input for table: \"level3\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level3_select_column",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level2_id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "description": "column name"
                    }
                ],
                "description": "select columns of table \"level3\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level2_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level3_set_input",
                "enumValues": null,
                "description": "input type for updating data in table \"level3\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level3_update_column",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level2_id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "description": "column name"
                    }
                ],
                "description": "update columns of table \"level3\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level4",
                "enumValues": null,
                "description": "columns and relationships of \"level4\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "uuid",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level3",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level3",
                            "ofType": null
                        },
                        "description": "An object relationship"
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level3_id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level5_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level5_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level5_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level5s",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level5",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "An array relationship"
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level5_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level5_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level5_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level5s_aggregate",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "level5_aggregate",
                                "ofType": null
                            }
                        },
                        "description": "An aggregated array relationship"
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level4_aggregate",
                "enumValues": null,
                "description": "aggregated selection of \"level4\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "aggregate",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level4_aggregate_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "nodes",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level4",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level4_aggregate_fields",
                "enumValues": null,
                "description": "aggregate fields of \"level4\"",
                "fields": [
                    {
                        "args": [
                            {
                                "name": "columns",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level4_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": null
                            },
                            {
                                "name": "distinct",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Boolean",
                                    "ofType": null
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "count",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "max",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level4_max_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "min",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level4_min_fields",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "count",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "max",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level4_max_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "min",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level4_min_order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level4_aggregate_order_by",
                "enumValues": null,
                "description": "order by aggregate values of table \"level4\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "data",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level4_insert_input",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "on_conflict",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level4_on_conflict",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level4_arr_rel_insert_input",
                "enumValues": null,
                "description": "input type for inserting array relation for remote table \"level4\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_and",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level4_bool_exp",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_not",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level4_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_or",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level4_bool_exp",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "uuid_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level3",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level3_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level3_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "uuid_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level5s",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level5_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "String_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level4_bool_exp",
                "enumValues": null,
                "description": "Boolean expression to filter rows from the table \"level4\". All fields are combined with a logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level4_constraint",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level4_pkey",
                        "description": "unique or primary key constraint"
                    }
                ],
                "description": "unique or primary key constraints on table \"level4\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level3",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level3_obj_rel_insert_input",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level3_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level5s",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level5_arr_rel_insert_input",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level4_insert_input",
                "enumValues": null,
                "description": "input type for inserting data into table \"level4\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level4_max_fields",
                "enumValues": null,
                "description": "aggregate max on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level3_id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level3_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level4_max_order_by",
                "enumValues": null,
                "description": "order by max() on columns of table \"level4\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level4_min_fields",
                "enumValues": null,
                "description": "aggregate min on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level3_id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level3_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level4_min_order_by",
                "enumValues": null,
                "description": "order by min() on columns of table \"level4\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level4_mutation_response",
                "enumValues": null,
                "description": "response of any mutation on the table \"level4\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "affected_rows",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Int",
                                "ofType": null
                            }
                        },
                        "description": "number of affected rows by the mutation"
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "returning",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level4",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "data of the affected rows by the mutation"
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "data",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level4_insert_input",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "on_conflict",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level4_on_conflict",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level4_obj_rel_insert_input",
                "enumValues": null,
                "description": "input type for inserting object relation for remote table \"level4\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "constraint",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "ENUM",
                                "name": "level4_constraint",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "update_columns",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "ENUM",
                                        "name": "level4_update_column",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "where",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level4_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level4_on_conflict",
                "enumValues": null,
                "description": "on conflict condition type for table \"level4\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level3",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level3_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level3_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level5s_aggregate",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level5_aggregate_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level4_order_by",
                "enumValues": null,
                "description": "ordering options when selecting data from \"level4\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "uuid",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level4_pk_columns_input",
                "enumValues": null,
                "description": "primary key columns input for table: \"level4\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level4_select_column",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level3_id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "description": "column name"
                    }
                ],
                "description": "select columns of table \"level4\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level3_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level4_set_input",
                "enumValues": null,
                "description": "input type for updating data in table \"level4\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level4_update_column",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level3_id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "description": "column name"
                    }
                ],
                "description": "update columns of table \"level4\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level5",
                "enumValues": null,
                "description": "columns and relationships of \"level5\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "uuid",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level4",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level4",
                            "ofType": null
                        },
                        "description": "An object relationship"
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level4_id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level5_aggregate",
                "enumValues": null,
                "description": "aggregated selection of \"level5\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "aggregate",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level5_aggregate_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "nodes",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level5",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level5_aggregate_fields",
                "enumValues": null,
                "description": "aggregate fields of \"level5\"",
                "fields": [
                    {
                        "args": [
                            {
                                "name": "columns",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level5_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": null
                            },
                            {
                                "name": "distinct",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Boolean",
                                    "ofType": null
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "count",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Int",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "max",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level5_max_fields",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "min",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level5_min_fields",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "count",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "max",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level5_max_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "min",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level5_min_order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level5_aggregate_order_by",
                "enumValues": null,
                "description": "order by aggregate values of table \"level5\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "data",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level5_insert_input",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "on_conflict",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level5_on_conflict",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level5_arr_rel_insert_input",
                "enumValues": null,
                "description": "input type for inserting array relation for remote table \"level5\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_and",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level5_bool_exp",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_not",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level5_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_or",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level5_bool_exp",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "uuid_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level4",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level4_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level4_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "uuid_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "String_comparison_exp",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level5_bool_exp",
                "enumValues": null,
                "description": "Boolean expression to filter rows from the table \"level5\". All fields are combined with a logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level5_constraint",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level5_pkey",
                        "description": "unique or primary key constraint"
                    }
                ],
                "description": "unique or primary key constraints on table \"level5\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level4",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level4_obj_rel_insert_input",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level4_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level5_insert_input",
                "enumValues": null,
                "description": "input type for inserting data into table \"level5\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level5_max_fields",
                "enumValues": null,
                "description": "aggregate max on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level4_id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level4_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level5_max_order_by",
                "enumValues": null,
                "description": "order by max() on columns of table \"level5\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level5_min_fields",
                "enumValues": null,
                "description": "aggregate min on columns",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level4_id",
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level4_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level5_min_order_by",
                "enumValues": null,
                "description": "order by min() on columns of table \"level5\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "level5_mutation_response",
                "enumValues": null,
                "description": "response of any mutation on the table \"level5\"",
                "fields": [
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "affected_rows",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Int",
                                "ofType": null
                            }
                        },
                        "description": "number of affected rows by the mutation"
                    },
                    {
                        "args": [],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "returning",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level5",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "data of the affected rows by the mutation"
                    }
                ]
            },
            {
                "inputFields": [
                    {
                        "name": "data",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "INPUT_OBJECT",
                                "name": "level5_insert_input",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "on_conflict",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level5_on_conflict",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level5_obj_rel_insert_input",
                "enumValues": null,
                "description": "input type for inserting object relation for remote table \"level5\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "constraint",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "ENUM",
                                "name": "level5_constraint",
                                "ofType": null
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "update_columns",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "ENUM",
                                        "name": "level5_update_column",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "where",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level5_bool_exp",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level5_on_conflict",
                "enumValues": null,
                "description": "on conflict condition type for table \"level5\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level4",
                        "defaultValue": null,
                        "type": {
                            "kind": "INPUT_OBJECT",
                            "name": "level4_order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level4_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "ENUM",
                            "name": "order_by",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level5_order_by",
                "enumValues": null,
                "description": "ordering options when selecting data from \"level5\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "uuid",
                                "ofType": null
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level5_pk_columns_input",
                "enumValues": null,
                "description": "primary key columns input for table: \"level5\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level5_select_column",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level4_id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "description": "column name"
                    }
                ],
                "description": "select columns of table \"level5\"",
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "level4_id",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "title",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level5_set_input",
                "enumValues": null,
                "description": "input type for updating data in table \"level5\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "level5_update_column",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level4_id",
                        "description": "column name"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "title",
                        "description": "column name"
                    }
                ],
                "description": "update columns of table \"level5\"",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "mutation_root",
                "enumValues": null,
                "description": "mutation root",
                "fields": [
                    {
                        "args": [
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level1_bool_exp",
                                        "ofType": null
                                    }
                                },
                                "description": "filter the rows which have to be deleted"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "delete_level1",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1_mutation_response",
                            "ofType": null
                        },
                        "description": "delete data from the table: \"level1\""
                    },
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "delete_level1_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1",
                            "ofType": null
                        },
                        "description": "delete single row from the table: \"level1\""
                    },
                    {
                        "args": [
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level2_bool_exp",
                                        "ofType": null
                                    }
                                },
                                "description": "filter the rows which have to be deleted"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "delete_level2",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level2_mutation_response",
                            "ofType": null
                        },
                        "description": "delete data from the table: \"level2\""
                    },
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "delete_level2_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level2",
                            "ofType": null
                        },
                        "description": "delete single row from the table: \"level2\""
                    },
                    {
                        "args": [
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level3_bool_exp",
                                        "ofType": null
                                    }
                                },
                                "description": "filter the rows which have to be deleted"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "delete_level3",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level3_mutation_response",
                            "ofType": null
                        },
                        "description": "delete data from the table: \"level3\""
                    },
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "delete_level3_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level3",
                            "ofType": null
                        },
                        "description": "delete single row from the table: \"level3\""
                    },
                    {
                        "args": [
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level4_bool_exp",
                                        "ofType": null
                                    }
                                },
                                "description": "filter the rows which have to be deleted"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "delete_level4",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level4_mutation_response",
                            "ofType": null
                        },
                        "description": "delete data from the table: \"level4\""
                    },
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "delete_level4_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level4",
                            "ofType": null
                        },
                        "description": "delete single row from the table: \"level4\""
                    },
                    {
                        "args": [
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level5_bool_exp",
                                        "ofType": null
                                    }
                                },
                                "description": "filter the rows which have to be deleted"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "delete_level5",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level5_mutation_response",
                            "ofType": null
                        },
                        "description": "delete data from the table: \"level5\""
                    },
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "delete_level5_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level5",
                            "ofType": null
                        },
                        "description": "delete single row from the table: \"level5\""
                    },
                    {
                        "args": [
                            {
                                "name": "objects",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "LIST",
                                        "name": null,
                                        "ofType": {
                                            "kind": "NON_NULL",
                                            "name": null,
                                            "ofType": {
                                                "kind": "INPUT_OBJECT",
                                                "name": "level1_insert_input",
                                                "ofType": null
                                            }
                                        }
                                    }
                                },
                                "description": "the rows to be inserted"
                            },
                            {
                                "name": "on_conflict",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_on_conflict",
                                    "ofType": null
                                },
                                "description": "on conflict condition"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "insert_level1",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1_mutation_response",
                            "ofType": null
                        },
                        "description": "insert data into the table: \"level1\""
                    },
                    {
                        "args": [
                            {
                                "name": "object",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level1_insert_input",
                                        "ofType": null
                                    }
                                },
                                "description": "the row to be inserted"
                            },
                            {
                                "name": "on_conflict",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_on_conflict",
                                    "ofType": null
                                },
                                "description": "on conflict condition"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "insert_level1_one",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1",
                            "ofType": null
                        },
                        "description": "insert a single row into the table: \"level1\""
                    },
                    {
                        "args": [
                            {
                                "name": "objects",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "LIST",
                                        "name": null,
                                        "ofType": {
                                            "kind": "NON_NULL",
                                            "name": null,
                                            "ofType": {
                                                "kind": "INPUT_OBJECT",
                                                "name": "level2_insert_input",
                                                "ofType": null
                                            }
                                        }
                                    }
                                },
                                "description": "the rows to be inserted"
                            },
                            {
                                "name": "on_conflict",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level2_on_conflict",
                                    "ofType": null
                                },
                                "description": "on conflict condition"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "insert_level2",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level2_mutation_response",
                            "ofType": null
                        },
                        "description": "insert data into the table: \"level2\""
                    },
                    {
                        "args": [
                            {
                                "name": "object",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level2_insert_input",
                                        "ofType": null
                                    }
                                },
                                "description": "the row to be inserted"
                            },
                            {
                                "name": "on_conflict",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level2_on_conflict",
                                    "ofType": null
                                },
                                "description": "on conflict condition"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "insert_level2_one",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level2",
                            "ofType": null
                        },
                        "description": "insert a single row into the table: \"level2\""
                    },
                    {
                        "args": [
                            {
                                "name": "objects",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "LIST",
                                        "name": null,
                                        "ofType": {
                                            "kind": "NON_NULL",
                                            "name": null,
                                            "ofType": {
                                                "kind": "INPUT_OBJECT",
                                                "name": "level3_insert_input",
                                                "ofType": null
                                            }
                                        }
                                    }
                                },
                                "description": "the rows to be inserted"
                            },
                            {
                                "name": "on_conflict",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level3_on_conflict",
                                    "ofType": null
                                },
                                "description": "on conflict condition"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "insert_level3",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level3_mutation_response",
                            "ofType": null
                        },
                        "description": "insert data into the table: \"level3\""
                    },
                    {
                        "args": [
                            {
                                "name": "object",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level3_insert_input",
                                        "ofType": null
                                    }
                                },
                                "description": "the row to be inserted"
                            },
                            {
                                "name": "on_conflict",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level3_on_conflict",
                                    "ofType": null
                                },
                                "description": "on conflict condition"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "insert_level3_one",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level3",
                            "ofType": null
                        },
                        "description": "insert a single row into the table: \"level3\""
                    },
                    {
                        "args": [
                            {
                                "name": "objects",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "LIST",
                                        "name": null,
                                        "ofType": {
                                            "kind": "NON_NULL",
                                            "name": null,
                                            "ofType": {
                                                "kind": "INPUT_OBJECT",
                                                "name": "level4_insert_input",
                                                "ofType": null
                                            }
                                        }
                                    }
                                },
                                "description": "the rows to be inserted"
                            },
                            {
                                "name": "on_conflict",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level4_on_conflict",
                                    "ofType": null
                                },
                                "description": "on conflict condition"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "insert_level4",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level4_mutation_response",
                            "ofType": null
                        },
                        "description": "insert data into the table: \"level4\""
                    },
                    {
                        "args": [
                            {
                                "name": "object",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level4_insert_input",
                                        "ofType": null
                                    }
                                },
                                "description": "the row to be inserted"
                            },
                            {
                                "name": "on_conflict",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level4_on_conflict",
                                    "ofType": null
                                },
                                "description": "on conflict condition"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "insert_level4_one",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level4",
                            "ofType": null
                        },
                        "description": "insert a single row into the table: \"level4\""
                    },
                    {
                        "args": [
                            {
                                "name": "objects",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "LIST",
                                        "name": null,
                                        "ofType": {
                                            "kind": "NON_NULL",
                                            "name": null,
                                            "ofType": {
                                                "kind": "INPUT_OBJECT",
                                                "name": "level5_insert_input",
                                                "ofType": null
                                            }
                                        }
                                    }
                                },
                                "description": "the rows to be inserted"
                            },
                            {
                                "name": "on_conflict",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level5_on_conflict",
                                    "ofType": null
                                },
                                "description": "on conflict condition"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "insert_level5",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level5_mutation_response",
                            "ofType": null
                        },
                        "description": "insert data into the table: \"level5\""
                    },
                    {
                        "args": [
                            {
                                "name": "object",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level5_insert_input",
                                        "ofType": null
                                    }
                                },
                                "description": "the row to be inserted"
                            },
                            {
                                "name": "on_conflict",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level5_on_conflict",
                                    "ofType": null
                                },
                                "description": "on conflict condition"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "insert_level5_one",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level5",
                            "ofType": null
                        },
                        "description": "insert a single row into the table: \"level5\""
                    },
                    {
                        "args": [
                            {
                                "name": "_append",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_append_input",
                                    "ofType": null
                                },
                                "description": "append existing jsonb value of filtered columns with new jsonb value"
                            },
                            {
                                "name": "_delete_at_path",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_delete_at_path_input",
                                    "ofType": null
                                },
                                "description": "delete the field or element with specified path (for JSON arrays, negative integers count from the end)"
                            },
                            {
                                "name": "_delete_elem",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_delete_elem_input",
                                    "ofType": null
                                },
                                "description": "delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array"
                            },
                            {
                                "name": "_delete_key",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_delete_key_input",
                                    "ofType": null
                                },
                                "description": "delete key/value pair or string element. key/value pairs are matched based on their key value"
                            },
                            {
                                "name": "_inc",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_inc_input",
                                    "ofType": null
                                },
                                "description": "increments the integer columns with given value of the filtered values"
                            },
                            {
                                "name": "_prepend",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_prepend_input",
                                    "ofType": null
                                },
                                "description": "prepend existing jsonb value of filtered columns with new jsonb value"
                            },
                            {
                                "name": "_set",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_set_input",
                                    "ofType": null
                                },
                                "description": "sets the columns of the filtered rows to the given values"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level1_bool_exp",
                                        "ofType": null
                                    }
                                },
                                "description": "filter the rows which have to be updated"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "update_level1",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1_mutation_response",
                            "ofType": null
                        },
                        "description": "update data of the table: \"level1\""
                    },
                    {
                        "args": [
                            {
                                "name": "_append",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_append_input",
                                    "ofType": null
                                },
                                "description": "append existing jsonb value of filtered columns with new jsonb value"
                            },
                            {
                                "name": "_delete_at_path",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_delete_at_path_input",
                                    "ofType": null
                                },
                                "description": "delete the field or element with specified path (for JSON arrays, negative integers count from the end)"
                            },
                            {
                                "name": "_delete_elem",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_delete_elem_input",
                                    "ofType": null
                                },
                                "description": "delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array"
                            },
                            {
                                "name": "_delete_key",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_delete_key_input",
                                    "ofType": null
                                },
                                "description": "delete key/value pair or string element. key/value pairs are matched based on their key value"
                            },
                            {
                                "name": "_inc",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_inc_input",
                                    "ofType": null
                                },
                                "description": "increments the integer columns with given value of the filtered values"
                            },
                            {
                                "name": "_prepend",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_prepend_input",
                                    "ofType": null
                                },
                                "description": "prepend existing jsonb value of filtered columns with new jsonb value"
                            },
                            {
                                "name": "_set",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_set_input",
                                    "ofType": null
                                },
                                "description": "sets the columns of the filtered rows to the given values"
                            },
                            {
                                "name": "pk_columns",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level1_pk_columns_input",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "update_level1_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1",
                            "ofType": null
                        },
                        "description": "update single row of the table: \"level1\""
                    },
                    {
                        "args": [
                            {
                                "name": "_set",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level2_set_input",
                                    "ofType": null
                                },
                                "description": "sets the columns of the filtered rows to the given values"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level2_bool_exp",
                                        "ofType": null
                                    }
                                },
                                "description": "filter the rows which have to be updated"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "update_level2",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level2_mutation_response",
                            "ofType": null
                        },
                        "description": "update data of the table: \"level2\""
                    },
                    {
                        "args": [
                            {
                                "name": "_set",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level2_set_input",
                                    "ofType": null
                                },
                                "description": "sets the columns of the filtered rows to the given values"
                            },
                            {
                                "name": "pk_columns",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level2_pk_columns_input",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "update_level2_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level2",
                            "ofType": null
                        },
                        "description": "update single row of the table: \"level2\""
                    },
                    {
                        "args": [
                            {
                                "name": "_set",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level3_set_input",
                                    "ofType": null
                                },
                                "description": "sets the columns of the filtered rows to the given values"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level3_bool_exp",
                                        "ofType": null
                                    }
                                },
                                "description": "filter the rows which have to be updated"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "update_level3",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level3_mutation_response",
                            "ofType": null
                        },
                        "description": "update data of the table: \"level3\""
                    },
                    {
                        "args": [
                            {
                                "name": "_set",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level3_set_input",
                                    "ofType": null
                                },
                                "description": "sets the columns of the filtered rows to the given values"
                            },
                            {
                                "name": "pk_columns",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level3_pk_columns_input",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "update_level3_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level3",
                            "ofType": null
                        },
                        "description": "update single row of the table: \"level3\""
                    },
                    {
                        "args": [
                            {
                                "name": "_set",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level4_set_input",
                                    "ofType": null
                                },
                                "description": "sets the columns of the filtered rows to the given values"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level4_bool_exp",
                                        "ofType": null
                                    }
                                },
                                "description": "filter the rows which have to be updated"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "update_level4",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level4_mutation_response",
                            "ofType": null
                        },
                        "description": "update data of the table: \"level4\""
                    },
                    {
                        "args": [
                            {
                                "name": "_set",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level4_set_input",
                                    "ofType": null
                                },
                                "description": "sets the columns of the filtered rows to the given values"
                            },
                            {
                                "name": "pk_columns",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level4_pk_columns_input",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "update_level4_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level4",
                            "ofType": null
                        },
                        "description": "update single row of the table: \"level4\""
                    },
                    {
                        "args": [
                            {
                                "name": "_set",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level5_set_input",
                                    "ofType": null
                                },
                                "description": "sets the columns of the filtered rows to the given values"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level5_bool_exp",
                                        "ofType": null
                                    }
                                },
                                "description": "filter the rows which have to be updated"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "update_level5",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level5_mutation_response",
                            "ofType": null
                        },
                        "description": "update data of the table: \"level5\""
                    },
                    {
                        "args": [
                            {
                                "name": "_set",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level5_set_input",
                                    "ofType": null
                                },
                                "description": "sets the columns of the filtered rows to the given values"
                            },
                            {
                                "name": "pk_columns",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "level5_pk_columns_input",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "update_level5_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level5",
                            "ofType": null
                        },
                        "description": "update single row of the table: \"level5\""
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "SCALAR",
                "possibleTypes": null,
                "interfaces": null,
                "name": "numeric",
                "enumValues": null,
                "description": null,
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_eq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "numeric",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "numeric",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "numeric",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_in",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "numeric",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_is_null",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "numeric",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "numeric",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_neq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "numeric",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_nin",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "numeric",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "numeric_comparison_exp",
                "enumValues": null,
                "description": "expression to compare columns of type numeric. All fields are combined with logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "ENUM",
                "possibleTypes": null,
                "interfaces": null,
                "name": "order_by",
                "enumValues": [
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "asc",
                        "description": "in the ascending order, nulls last"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "asc_nulls_first",
                        "description": "in the ascending order, nulls first"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "asc_nulls_last",
                        "description": "in the ascending order, nulls last"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "desc",
                        "description": "in the descending order, nulls first"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "desc_nulls_first",
                        "description": "in the descending order, nulls first"
                    },
                    {
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "desc_nulls_last",
                        "description": "in the descending order, nulls last"
                    }
                ],
                "description": "column ordering options",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "query_root",
                "enumValues": null,
                "description": "query root",
                "fields": [
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level1_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1",
                            "ofType": null
                        },
                        "description": "fetch data from the table: \"level1\" using primary key columns"
                    },
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level2_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level2",
                            "ofType": null
                        },
                        "description": "fetch data from the table: \"level2\" using primary key columns"
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level3_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level3_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level3_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level3",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level3",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "fetch data from the table: \"level3\""
                    },
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level3_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level3",
                            "ofType": null
                        },
                        "description": "fetch data from the table: \"level3\" using primary key columns"
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level4_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level4_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level4_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level4",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level4",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "fetch data from the table: \"level4\""
                    },
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level4_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level4",
                            "ofType": null
                        },
                        "description": "fetch data from the table: \"level4\" using primary key columns"
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level5_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level5_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level5_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level5",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level5",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "fetch data from the table: \"level5\""
                    },
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level5_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level5",
                            "ofType": null
                        },
                        "description": "fetch data from the table: \"level5\" using primary key columns"
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level1_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level1_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "rootLevel1s",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level1",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "fetch data from the table: \"level1\""
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level2_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level2_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level2_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "rootLevel2s",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level2",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "fetch data from the table: \"level2\""
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "OBJECT",
                "possibleTypes": null,
                "interfaces": [],
                "name": "subscription_root",
                "enumValues": null,
                "description": "subscription root",
                "fields": [
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level1_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level1_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level1_aggregate",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "level1_aggregate",
                                "ofType": null
                            }
                        },
                        "description": "fetch aggregated fields from the table: \"level1\""
                    },
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level1_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level1",
                            "ofType": null
                        },
                        "description": "fetch data from the table: \"level1\" using primary key columns"
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level2_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level2_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level2_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level2_aggregate",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "level2_aggregate",
                                "ofType": null
                            }
                        },
                        "description": "fetch aggregated fields from the table: \"level2\""
                    },
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level2_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level2",
                            "ofType": null
                        },
                        "description": "fetch data from the table: \"level2\" using primary key columns"
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level3_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level3_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level3_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level3",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level3",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "fetch data from the table: \"level3\""
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level3_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level3_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level3_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level3_aggregate",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "level3_aggregate",
                                "ofType": null
                            }
                        },
                        "description": "fetch aggregated fields from the table: \"level3\""
                    },
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level3_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level3",
                            "ofType": null
                        },
                        "description": "fetch data from the table: \"level3\" using primary key columns"
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level4_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level4_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level4_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level4",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level4",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "fetch data from the table: \"level4\""
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level4_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level4_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level4_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level4_aggregate",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "level4_aggregate",
                                "ofType": null
                            }
                        },
                        "description": "fetch aggregated fields from the table: \"level4\""
                    },
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level4_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level4",
                            "ofType": null
                        },
                        "description": "fetch data from the table: \"level4\" using primary key columns"
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level5_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level5_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level5_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level5",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level5",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "fetch data from the table: \"level5\""
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level5_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level5_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level5_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level5_aggregate",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "level5_aggregate",
                                "ofType": null
                            }
                        },
                        "description": "fetch aggregated fields from the table: \"level5\""
                    },
                    {
                        "args": [
                            {
                                "name": "id",
                                "defaultValue": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "uuid",
                                        "ofType": null
                                    }
                                },
                                "description": null
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "level5_by_pk",
                        "type": {
                            "kind": "OBJECT",
                            "name": "level5",
                            "ofType": null
                        },
                        "description": "fetch data from the table: \"level5\" using primary key columns"
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level1_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level1_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level1_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "rootLevel1s",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level1",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "fetch data from the table: \"level1\""
                    },
                    {
                        "args": [
                            {
                                "name": "distinct_on",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "ENUM",
                                            "name": "level2_select_column",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "distinct select on columns"
                            },
                            {
                                "name": "limit",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "limit the number of rows returned"
                            },
                            {
                                "name": "offset",
                                "defaultValue": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "description": "skip the first n rows. Use only with order_by"
                            },
                            {
                                "name": "order_by",
                                "defaultValue": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "name": null,
                                        "ofType": {
                                            "kind": "INPUT_OBJECT",
                                            "name": "level2_order_by",
                                            "ofType": null
                                        }
                                    }
                                },
                                "description": "sort the rows by one or more columns"
                            },
                            {
                                "name": "where",
                                "defaultValue": null,
                                "type": {
                                    "kind": "INPUT_OBJECT",
                                    "name": "level2_bool_exp",
                                    "ofType": null
                                },
                                "description": "filter the rows returned"
                            }
                        ],
                        "isDeprecated": false,
                        "deprecationReason": null,
                        "name": "rootLevel2s",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "level2",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "description": "fetch data from the table: \"level2\""
                    }
                ]
            },
            {
                "inputFields": null,
                "kind": "SCALAR",
                "possibleTypes": null,
                "interfaces": null,
                "name": "time",
                "enumValues": null,
                "description": null,
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_eq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "time",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "time",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "time",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_in",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "time",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_is_null",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "time",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "time",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_neq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "time",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_nin",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "time",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "time_comparison_exp",
                "enumValues": null,
                "description": "expression to compare columns of type time. All fields are combined with logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "SCALAR",
                "possibleTypes": null,
                "interfaces": null,
                "name": "timestamp",
                "enumValues": null,
                "description": null,
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_eq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_in",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "timestamp",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_is_null",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_neq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamp",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_nin",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "timestamp",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "timestamp_comparison_exp",
                "enumValues": null,
                "description": "expression to compare columns of type timestamp. All fields are combined with logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "SCALAR",
                "possibleTypes": null,
                "interfaces": null,
                "name": "timestamptz",
                "enumValues": null,
                "description": null,
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_eq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamptz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamptz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamptz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_in",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "timestamptz",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_is_null",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamptz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamptz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_neq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timestamptz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_nin",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "timestamptz",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "timestamptz_comparison_exp",
                "enumValues": null,
                "description": "expression to compare columns of type timestamptz. All fields are combined with logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "SCALAR",
                "possibleTypes": null,
                "interfaces": null,
                "name": "timetz",
                "enumValues": null,
                "description": null,
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_eq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timetz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timetz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timetz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_in",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "timetz",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_is_null",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timetz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timetz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_neq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "timetz",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_nin",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "timetz",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "timetz_comparison_exp",
                "enumValues": null,
                "description": "expression to compare columns of type timetz. All fields are combined with logical 'AND'.",
                "fields": null
            },
            {
                "inputFields": null,
                "kind": "SCALAR",
                "possibleTypes": null,
                "interfaces": null,
                "name": "uuid",
                "enumValues": null,
                "description": null,
                "fields": null
            },
            {
                "inputFields": [
                    {
                        "name": "_eq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_gte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_in",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "uuid",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    },
                    {
                        "name": "_is_null",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "Boolean",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lt",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_lte",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_neq",
                        "defaultValue": null,
                        "type": {
                            "kind": "SCALAR",
                            "name": "uuid",
                            "ofType": null
                        },
                        "description": null
                    },
                    {
                        "name": "_nin",
                        "defaultValue": null,
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "SCALAR",
                                    "name": "uuid",
                                    "ofType": null
                                }
                            }
                        },
                        "description": null
                    }
                ],
                "kind": "INPUT_OBJECT",
                "possibleTypes": null,
                "interfaces": null,
                "name": "uuid_comparison_exp",
                "enumValues": null,
                "description": "expression to compare columns of type uuid. All fields are combined with logical 'AND'.",
                "fields": null
            }
        ],
        "mutationType": {
            "name": "mutation_root"
        }
    }
}
 
 
}