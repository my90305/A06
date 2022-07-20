"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/gossiping/[sensorId]/tags/[tagId]";
exports.ids = ["pages/api/gossiping/[sensorId]/tags/[tagId]"];
exports.modules = {

/***/ "(api)/./pages/api/gossiping/[sensorId]/tags/[tagId].ts":
/*!********************************************************!*\
  !*** ./pages/api/gossiping/[sensorId]/tags/[tagId].ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst CORRECT_LIST = [\n    {\n        id: 0,\n        sensorId: \"0\",\n        tagId: \"163157131167\"\n    },\n    {\n        id: 1,\n        sensorId: \"1\",\n        tagId: \"677094167\"\n    },\n    {\n        id: 2,\n        sensorId: \"2\",\n        tagId: \"2296120173\"\n    },\n    , \n];\nlet checkedArray = [\n    false,\n    false,\n    false\n];\nconst isAllChecked = ()=>checkedArray.findIndex((item)=>item === false) < 0;\nfunction handler(req, res) {\n    const sensorId = req.query.sensorId;\n    const tagId = req.query.tagId;\n    for (const item of CORRECT_LIST){\n        if (item && item.sensorId === sensorId && item.tagId === tagId) {\n            checkedArray[item.id] = true;\n            if (isAllChecked()) {\n                console.log(\"yeeee\");\n            }\n            return res.status(201).json({\n                success: \"true\",\n                sensorId,\n                tagId,\n                checkedArray,\n                isAllChecked: isAllChecked(),\n                i: checkedArray.findIndex((item)=>item === false)\n            });\n        }\n    }\n    return res.status(200).json({\n        error: \"Not this card\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ29zc2lwaW5nL1tzZW5zb3JJZF0vdGFncy9bdGFnSWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNQSxZQUFZLEdBQUc7SUFDbkI7UUFBRUMsRUFBRSxFQUFFLENBQUM7UUFBRUMsUUFBUSxFQUFFLEdBQUc7UUFBRUMsS0FBSyxFQUFFLGNBQWM7S0FBRTtJQUMvQztRQUFFRixFQUFFLEVBQUUsQ0FBQztRQUFFQyxRQUFRLEVBQUUsR0FBRztRQUFFQyxLQUFLLEVBQUUsV0FBVztLQUFFO0lBQzVDO1FBQUVGLEVBQUUsRUFBRSxDQUFDO1FBQUVDLFFBQVEsRUFBRSxHQUFHO1FBQUVDLEtBQUssRUFBRSxZQUFZO0tBQUU7O0NBQzlDO0FBRUQsSUFBSUMsWUFBWSxHQUFHO0lBQUMsS0FBSztJQUFFLEtBQUs7SUFBRSxLQUFLO0NBQUM7QUFDeEMsTUFBTUMsWUFBWSxHQUFHLElBQU1ELFlBQVksQ0FBQ0UsU0FBUyxDQUFDLENBQUNDLElBQUksR0FBS0EsSUFBSSxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFFaEUsU0FBU0MsT0FBTyxDQUFDQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQ3pFLE1BQU1SLFFBQVEsR0FBR08sR0FBRyxDQUFDRSxLQUFLLENBQUNULFFBQVE7SUFFbkMsTUFBTUMsS0FBSyxHQUFHTSxHQUFHLENBQUNFLEtBQUssQ0FBQ1IsS0FBSztJQUc3QixLQUFLLE1BQU1JLElBQUksSUFBSVAsWUFBWSxDQUFFO1FBQy9CLElBQUlPLElBQUksSUFDTkEsSUFBSSxDQUFDTCxRQUFRLEtBQUtBLFFBQVEsSUFDMUJLLElBQUksQ0FBQ0osS0FBSyxLQUFLQSxLQUFLLEVBQUU7WUFDdEJDLFlBQVksQ0FBQ0csSUFBSSxDQUFDTixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSUksWUFBWSxFQUFFLEVBQUU7Z0JBQ2xCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QjtZQUNELE9BQU9ILEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxNQUFNO2dCQUFFZCxRQUFRO2dCQUFFQyxLQUFLO2dCQUFFQyxZQUFZO2dCQUFFQyxZQUFZLEVBQUVBLFlBQVksRUFBRTtnQkFBRVksQ0FBQyxFQUFFYixZQUFZLENBQUNFLFNBQVMsQ0FBQyxDQUFDQyxJQUFJLEdBQUtBLElBQUksS0FBSyxLQUFLLENBQUM7YUFBRSxDQUFDO1NBQ25LO0tBQ0Y7SUFHRCxPQUFPRyxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVHLEtBQUssRUFBRSxlQUFlO0tBQUUsQ0FBQztDQUN4RCIsInNvdXJjZXMiOlsid2VicGFjazovL25ld19uZXh0Ly4vcGFnZXMvYXBpL2dvc3NpcGluZy9bc2Vuc29ySWRdL3RhZ3MvW3RhZ0lkXS50cz8yN2Q2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5cbmNvbnN0IENPUlJFQ1RfTElTVCA9IFtcbiAgeyBpZDogMCwgc2Vuc29ySWQ6ICcwJywgdGFnSWQ6ICcxNjMxNTcxMzExNjcnIH0sXG4gIHsgaWQ6IDEsIHNlbnNvcklkOiAnMScsIHRhZ0lkOiAnNjc3MDk0MTY3JyB9LFxuICB7IGlkOiAyLCBzZW5zb3JJZDogJzInLCB0YWdJZDogJzIyOTYxMjAxNzMnIH0sICxcbl1cblxubGV0IGNoZWNrZWRBcnJheSA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlXVxuY29uc3QgaXNBbGxDaGVja2VkID0gKCkgPT4gY2hlY2tlZEFycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gZmFsc2UpIDwgMFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGNvbnN0IHNlbnNvcklkID0gcmVxLnF1ZXJ5LnNlbnNvcklkIGFzIHN0cmluZztcblxuICBjb25zdCB0YWdJZCA9IHJlcS5xdWVyeS50YWdJZCBhcyBzdHJpbmc7XG5cblxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgQ09SUkVDVF9MSVNUKSB7XG4gICAgaWYgKGl0ZW0gJiZcbiAgICAgIGl0ZW0uc2Vuc29ySWQgPT09IHNlbnNvcklkICYmXG4gICAgICBpdGVtLnRhZ0lkID09PSB0YWdJZCkge1xuICAgICAgY2hlY2tlZEFycmF5W2l0ZW0uaWRdID0gdHJ1ZTtcbiAgICAgIGlmIChpc0FsbENoZWNrZWQoKSkge1xuICAgICAgICBjb25zb2xlLmxvZygneWVlZWUnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6ICd0cnVlJywgc2Vuc29ySWQsIHRhZ0lkLCBjaGVja2VkQXJyYXksIGlzQWxsQ2hlY2tlZDogaXNBbGxDaGVja2VkKCksIGk6IGNoZWNrZWRBcnJheS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0gPT09IGZhbHNlKSB9KVxuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZXJyb3I6ICdOb3QgdGhpcyBjYXJkJyB9KVxufVxuIl0sIm5hbWVzIjpbIkNPUlJFQ1RfTElTVCIsImlkIiwic2Vuc29ySWQiLCJ0YWdJZCIsImNoZWNrZWRBcnJheSIsImlzQWxsQ2hlY2tlZCIsImZpbmRJbmRleCIsIml0ZW0iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJpIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/gossiping/[sensorId]/tags/[tagId].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/gossiping/[sensorId]/tags/[tagId].ts"));
module.exports = __webpack_exports__;

})();