/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { BlockDefinition } from "@kapeta/schemas";
import { BlockTypeShapeProps } from "@kapeta/ui-web-types";
import {
  BlockHandle,
  BlockInstanceName,
  BlockName,
  BlockStatus,
  BlockVersion,
  useBlock,
} from "@kapeta/ui-web-components";
import React from "react";

export const DesktopBlockShapeComponent = <TBlockType extends BlockDefinition>(
  props: BlockTypeShapeProps<TBlockType>
) => {
  // Scaling the topbar svg to fit the block
  const block = useBlock();
  const svgWidth = 192;
  const svgHeight = 180 * (props.width / svgWidth);

  return (
      <g
          className="block-node"
          style={{cursor: block.readOnly ? "default" : "move"}}
      >
        {/* Background */}
        <rect width={props.width} height={props.height} rx="6" fill="white"/>
        {/* Border */}
        <rect
            x="0.5"
            y="0.5"
            width={props.width - 1}
            height={props.height - 1}
            rx="5.5"
            fill="none"
            stroke="black"
            strokeOpacity="0.12"
        />

        {/* Offset if block has error */}
        <svg
            fill="none"
            x={props.width / 2}
            y={15}
            width={props.width - 20}
            viewBox="0 0 150 150"
        >
          <BlockInstanceName/>
        </svg>
        <svg fill="none" x={props.width / 2} y={55}>
          <BlockName/>
        </svg>

        <svg x={props.width / 2} y={85}>
          <BlockHandle/>
        </svg>

        <svg y={props.height - 30} x={props.width / 2}>
          <BlockVersion/>
        </svg>

        {/* Bottom Screen */}
        <svg y={props.height - 180} width={props.width} height={svgHeight} viewBox="0 0 192 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M192 165C192 167.761 189.761 170 187 170L5 170C2.23859 170 0 167.761 0 165V144L192 144V165Z"
                fill="#E0E0E0"/>
          <rect x="92" y="153" width="8" height="8" rx="4" fill="white"/>
          <path d="M69 176.5H125" stroke="#E0E0E0" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      </g>
  );
};
