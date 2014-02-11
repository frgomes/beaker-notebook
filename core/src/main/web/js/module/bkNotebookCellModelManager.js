/*
 *  Copyright 2014 TWO SIGMA INVESTMENTS, LLC
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * M_bkNotebookCellModelManager
 * Notebook Cell Model doesn't own the notebook model.
 */
//(function () {
//    'use strict';
//
//    var module = angular.module("M_bkNotebookCellModelManager", []);
//    module.factory("bkNotebookCellModelManager", function () {
//        var _cells = [];
//
//        var _cleanup = function () {
//
//        };
//
//        return {
//            reset: function (cells) {
//                /* reset the notebook cell model to be managed */
//                _cleanup();
//                _cells = cells;
//            },
//            getCell: function (id) {
//                return _.find(_cells, function (it) {
//                    return it.id === id;
//                });
//            },
//            getLevel: function (id) {
//                return this.getCell(id).level;
//            },
//            getChildren: function (id) {
//                return null;
//            }
//        };
//    });
//})();

function helloWorld() {
    return "Hello world!";
}