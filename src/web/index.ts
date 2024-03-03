/**
 * Copyright 2024 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { IBlockTypeProvider } from '@kapeta/ui-web-types';
import { DesktopBlockEditorComponent } from './DesktopBlockEditorComponent';
import DesktopBlockValidation from './DesktopBlockValidation';
import { DesktopBlockShapeComponent } from './DesktopBlockShapeComponent';

const blockDefinition = require('../../kapeta.yml');
const packageJson = require('../../package.json');

const blockTypeProvider: IBlockTypeProvider = {
    kind: blockDefinition.metadata.name,
    version: packageJson.version,
    title: blockDefinition.metadata.title || blockDefinition.metadata.name,
    validate: DesktopBlockValidation,
    editorComponent: DesktopBlockEditorComponent,
    definition: blockDefinition,
    resourceKinds: ['kapeta/resource-type-rest-client'],
    shapeWidth: 150,
    getShapeHeight: (resourceHeight: number) => Math.max(140, resourceHeight + 50),
    shapeComponent: DesktopBlockShapeComponent,
};

export default blockTypeProvider;
