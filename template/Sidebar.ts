/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import Identifier from "../types/Identifier";

export default ({
  classes,
  interfaces,
  namespaces,
  constants,
  typedefs
}: {
  classes: Identifier[];
  interfaces: Identifier[];
  namespaces: Identifier[];
  constants: Identifier[];
  typedefs: Identifier[];
}) => {
  const sidebar: {[key: string]: any} = {};

  const categories: any[] = [];
  sidebar.api = categories;

  if (classes.length > 0) {
    categories.push({
      type: "category",
      label: "Class",
      items: classes.map(item => `api/${item.name}`)
    });
  }

  if (interfaces.length > 0) {
    categories.push({
      type: "category",
      label: "Interface",
      items: interfaces.map(item => `api/${item.name}`)
    });
  }

  if (namespaces.length > 0) {
    categories.push({
      type: "category",
      label: "Namespace",
      items: namespaces.map(item => `api/${item.name}`)
    });
  }

  if (constants.length > 0) {
    categories.push({
      type: "category",
      label: "Constant",
      items: constants.map(item => `api/${item.name}`)
    });
  }

  if (typedefs.length > 0) {
    categories.push({
      type: "category",
      label: "Typedef",
      items: typedefs.map(item => `api/${item.name}`)
    });
  }

  return `module.exports = ${JSON.stringify(sidebar, undefined, 2)};\n`;
};
