/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { IBlockTypeProvider } from "@kapeta/ui-web-types";
import {DesktopBlockEditorComponent} from './DesktopBlockEditorComponent';
import DesktopBlockValidation from './DesktopBlockValidation';

const blockDefinition = require('../../kapeta.yml');
const packageJson = require('../../package.json');

const blockTypeProvider:IBlockTypeProvider = {
    kind: blockDefinition.metadata.name,
    version: packageJson.version,
    title: blockDefinition.metadata.title || blockDefinition.metadata.name,
    validate: DesktopBlockValidation,
    editorComponent: DesktopBlockEditorComponent,
    definition: blockDefinition
};

export default blockTypeProvider;
