'use strict';
exports.list_all_tasks = function (req, res) {
    res.json([
        { id: 1, name: "T1" },
        { id: 2, name: "T2" },
        { id: 3, name: "T3" },
        { id: 4, name: "T4" },
        { id: 5, name: "T5" },
    ]);
};