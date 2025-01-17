/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedClass from "../types/DocumentedClass";
import Identifier from "../types/Identifier";
import { getDescription, inlineLink, showExtends, showImplements, showInternalWarning } from "../src/utils";

import Import from "./partials/Import";
import ClassSummary from "./partials/ClassSummary";
import ClassConstructor from "./partials/ClassConstructor";
import ClassProperties from "./partials/ClassProperties";
import ClassMethods from "./partials/ClassMethods";
import ClassEvents from "./partials/ClassEvents";

export default (classData: DocumentedClass, dataMap: Map<string, Identifier>, locale: string = "en"): string => `---
custom_edit_url: null
---

${Import()}

${showInternalWarning(classData)}

\`\`\`ts
class ${classData.name}${showExtends(classData)}${showImplements(classData)}
\`\`\`
${inlineLink(getDescription(classData, locale))}

${ClassSummary(classData)}

${ClassConstructor(classData, dataMap, locale)}

${ClassProperties(classData, dataMap, locale)}
${ClassMethods(classData, dataMap, locale)}
${ClassEvents(classData, dataMap, locale)}
`.replace(/\n{3,}/gm, "\n\n");
