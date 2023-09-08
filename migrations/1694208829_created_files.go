package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		jsonData := `{
			"id": "8cepxa27n3hwsng",
			"created": "2023-09-08 21:33:49.492Z",
			"updated": "2023-09-08 21:33:49.492Z",
			"name": "files",
			"type": "base",
			"system": false,
			"schema": [
				{
					"system": false,
					"id": "tpft88td",
					"name": "name",
					"type": "text",
					"required": true,
					"presentable": false,
					"unique": false,
					"options": {
						"min": null,
						"max": null,
						"pattern": ""
					}
				},
				{
					"system": false,
					"id": "znydm9to",
					"name": "file",
					"type": "file",
					"required": true,
					"presentable": false,
					"unique": false,
					"options": {
						"maxSelect": 1,
						"maxSize": 5242880,
						"mimeTypes": [],
						"thumbs": [],
						"protected": true
					}
				},
				{
					"system": false,
					"id": "ili3ipqt",
					"name": "public",
					"type": "bool",
					"required": false,
					"presentable": false,
					"unique": false,
					"options": {}
				},
				{
					"system": false,
					"id": "2dyznehv",
					"name": "owner",
					"type": "relation",
					"required": true,
					"presentable": false,
					"unique": false,
					"options": {
						"collectionId": "_pb_users_auth_",
						"cascadeDelete": false,
						"minSelect": null,
						"maxSelect": 1,
						"displayFields": null
					}
				},
				{
					"system": false,
					"id": "zsfa9eer",
					"name": "shared",
					"type": "relation",
					"required": false,
					"presentable": false,
					"unique": false,
					"options": {
						"collectionId": "_pb_users_auth_",
						"cascadeDelete": false,
						"minSelect": null,
						"maxSelect": null,
						"displayFields": null
					}
				}
			],
			"indexes": [
				"CREATE UNIQUE INDEX ` + "`" + `idx_AHxMDPe` + "`" + ` ON ` + "`" + `files` + "`" + ` (` + "`" + `name` + "`" + `)"
			],
			"listRule": "public = true || owner.id = @request.auth.id || shared.id ?= @request.auth.id",
			"viewRule": "public = true || owner.id = @request.auth.id || shared.id ?= @request.auth.id",
			"createRule": null,
			"updateRule": "owner.id = @request.auth.id",
			"deleteRule": "owner.id = @request.auth.id",
			"options": {}
		}`

		collection := &models.Collection{}
		if err := json.Unmarshal([]byte(jsonData), &collection); err != nil {
			return err
		}

		return daos.New(db).SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("8cepxa27n3hwsng")
		if err != nil {
			return err
		}

		return dao.DeleteCollection(collection)
	})
}
