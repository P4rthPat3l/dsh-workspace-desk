globalThis.__LAB_CSS__ = "\n.WorkspacePicker_modalAction {\n  min-width: 72px;\n}\n\n.WorkspacePicker_modalError,\n.WorkspacePicker_menuStatus {\n  margin-top: 8px;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.WorkspacePicker_modalError {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.WorkspacePicker_menuStatus,\n.WorkspacePicker_pathSuffix {\n  color: var(--dsw-alias-label-secondary);\n}\n\n\n.WorkspacePicker_disambiguated {\n  display: flex;\n  gap: 4px;\n  min-width: 0;\n}\n\n.WorkspacePicker_title,\n.WorkspacePicker_pathSuffix {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.WorkspacePicker_pathSuffix {\n  flex: none;\n  max-width: 75%;\n}\n\n.WorkspaceBrowser_root {\n  --dsh-session-list-edge-inset: var(--dsh-sidebar-inline-padding);\n  --dsh-session-list-scrollbar-width: 5px;\n  --dsh-session-list-scrollbar-offset: 2px;\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-right: var(--dsh-session-list-edge-inset);\n}\n\n.WorkspaceBrowser_root.WorkspaceBrowser_rail {\n  padding-right: 0;\n}\n\n.WorkspaceBrowser_iconButton {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--dsw-alias-label-secondary);\n}\n\n\n.WorkspaceBrowser_iconButton:focus-visible,\n.WorkspaceBrowser_searchButton:focus-visible,\n.WorkspaceBrowser_clearButton:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -2px;\n}\n\n@media (hover: hover) {\n  .WorkspaceBrowser_iconButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n\n.WorkspaceBrowser_viewOptionsMenu {\n  min-width: 200px;\n}\n\n\n.WorkspaceBrowser_sectionHeader {\n  flex: none;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 4px;\n  height: 36px;\n  padding-left: var(--dsh-sidebar-row-padding);\n  margin-bottom: 4px;\n  box-sizing: border-box;\n  border-radius: var(--dsw-radius-md);\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_sectionHeader {\n  margin-top: 2px;\n  margin-right: -4px;\n}\n\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_sectionHeader.WorkspaceBrowser_searchSpacingMotion {\n  transition:\n    margin-right 180ms var(--ds-ease-in-out),\n    padding-inline 180ms var(--ds-ease-in-out),\n    gap 180ms var(--ds-ease-in-out);\n}\n\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_sectionHeader:not(:has(.WorkspaceBrowser_searchExpanded)) {\n  padding-right: 1px;\n}\n\n.WorkspaceBrowser_sectionLabel {\n  position: relative;\n  left: -1px;\n  flex: none;\n  max-width: 45%;\n  min-width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 20px;\n  opacity: 1;\n  visibility: visible;\n  transition:\n    max-width 180ms var(--ds-ease-in-out),\n    margin-right 180ms var(--ds-ease-in-out),\n    opacity 120ms var(--ds-ease-in-out),\n    transform 180ms var(--ds-ease-in-out),\n    visibility 0s linear;\n}\n\n.WorkspaceBrowser_sectionLabelHidden {\n  max-width: 0;\n  margin-right: -4px;\n  opacity: 0;\n  transform: translateX(-4px);\n  visibility: hidden;\n  transition-delay: 0s, 0s, 0s, 0s, 180ms;\n}\n\n.WorkspaceBrowser_searchSlot {\n  flex: 1;\n  max-width: 28px;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  padding-left: 0;\n  box-sizing: border-box;\n  transition:\n    max-width 180ms var(--ds-ease-in-out),\n    padding-left 180ms var(--ds-ease-in-out);\n}\n\n.WorkspaceBrowser_searchSlotExpanded {\n  max-width: 100%;\n  padding-left: 0;\n}\n\n.WorkspaceBrowser_headerActions {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  max-width: 60px;\n  opacity: 1;\n  overflow: hidden;\n  visibility: visible;\n  transition:\n    max-width 180ms var(--ds-ease-in-out),\n    opacity 120ms var(--ds-ease-in-out),\n    transform 180ms var(--ds-ease-in-out),\n    visibility 0s linear;\n}\n\n.WorkspaceBrowser_headerActionsHidden {\n  max-width: 0;\n  opacity: 0;\n  transform: translateX(4px);\n  visibility: hidden;\n  pointer-events: none;\n  transition-delay: 0s, 0s, 0s, 180ms;\n}\n\n\n.WorkspaceBrowser_search {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 0;\n  width: 100%;\n  height: 28px;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  cursor: text;\n  color: var(--dsw-alias-label-secondary);\n  overflow: hidden;\n  transition:\n    width 180ms var(--ds-ease-in-out),\n    padding 180ms var(--ds-ease-in-out),\n    border-color 180ms var(--ds-ease-in-out),\n    background-color 180ms var(--ds-ease-in-out);\n}\n\n.WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_sectionHeader:has(.WorkspaceBrowser_searchExpanded) {\n  margin-right: 0;\n  padding-inline: calc(var(--dsh-sidebar-paint-inset) + 1px);\n  gap: 0;\n}\n\n.WorkspaceBrowser_sectionHeader:has(.WorkspaceBrowser_searchExpanded) .WorkspaceBrowser_sectionLabelHidden {\n  margin-right: 0;\n}\n\n.WorkspaceBrowser_searchExpanded {\n  width: 100%;\n  height: 32px;\n  margin-inline: 0;\n  padding: 0 4px 0 0;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-md);\n  background: transparent;\n  color: var(--dsw-alias-label-caption);\n}\n\n.WorkspaceBrowser_searchButton {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: inherit;\n}\n\n.WorkspaceBrowser_searchExpanded .WorkspaceBrowser_searchButton {\n  width: 28px;\n  height: 32px;\n}\n\n@media (hover: hover) {\n  .WorkspaceBrowser_searchButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n\n  .WorkspaceBrowser_searchExpanded .WorkspaceBrowser_searchButton:hover {\n    background: transparent;\n  }\n}\n\n.WorkspaceBrowser_searchInput {\n  flex: 1;\n  width: 0;\n  min-width: 0;\n  border: none;\n  outline: none;\n  background: transparent;\n  opacity: 0;\n  pointer-events: none;\n  font-size: 13px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-primary);\n  transition: opacity 120ms var(--ds-ease-in-out);\n}\n\n.WorkspaceBrowser_searchExpanded .WorkspaceBrowser_searchInput {\n  margin-left: -2px;\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.WorkspaceBrowser_searchInput::placeholder {\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.WorkspaceBrowser_clearButton {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--dsw-alias-label-secondary);\n}\n\n@media (hover: hover) {\n  .WorkspaceBrowser_clearButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n\n.WorkspaceBrowser_rail .WorkspaceBrowser_sectionHeader {\n  gap: 0;\n  padding-left: 0;\n  margin-bottom: 12px;\n  justify-content: flex-start;\n}\n\n.WorkspaceBrowser_rail .WorkspaceBrowser_headerActions {\n  max-width: none;\n}\n\n.WorkspaceBrowser_rail .WorkspaceBrowser_iconButton {\n  width: 36px;\n  height: 36px;\n  \n  border-radius: var(--dsw-radius-md);\n  color: var(--dsw-alias-label-primary);\n}\n\n.WorkspaceBrowser_rail .WorkspaceBrowser_search {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  margin: 0 0 12px;\n  gap: 0;\n  \n  border-radius: var(--dsw-radius-md);\n  border-color: transparent;\n  background: transparent;\n}\n\n.WorkspaceBrowser_rail .WorkspaceBrowser_searchButton {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--dsw-radius-md);\n  color: var(--dsw-alias-label-primary);\n}\n\n@media (hover: hover) {\n  .WorkspaceBrowser_rail .WorkspaceBrowser_searchButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n\n.WorkspaceBrowser_listArea {\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  margin-left: -4px;\n  margin-right: calc(-1 * var(--dsh-session-list-edge-inset));\n  padding-left: 4px;\n  \n  overflow: visible;\n}\n\n.WorkspaceBrowser_rail .WorkspaceBrowser_listArea {\n  margin-left: 0;\n  margin-right: 0;\n  padding-left: 0;\n}\n\n\n.WorkspaceBrowser_treeBody {\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n\n.WorkspaceBrowser_fade {\n  position: absolute;\n  left: 0;\n  right: var(--dsh-session-list-edge-inset);\n  bottom: 0;\n  height: 24px;\n  background: linear-gradient(to bottom, transparent, var(--dsw-specific-sidebar-fill));\n  pointer-events: none;\n}\n\n\n[data-platform='darwin'] .WorkspaceBrowser_fade {\n  display: none;\n}\n\n\n.WorkspaceBrowser_wide {\n  animation: WorkspaceBrowser_wide-in 200ms var(--ds-ease-in-out);\n}\n\n@keyframes WorkspaceBrowser_wide-in {\n  from { opacity: 0; }\n}\n\n\n.WorkspaceBrowser_list {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  margin-left: -4px;\n  margin-right: var(--dsh-session-list-scrollbar-offset);\n  padding-left: 4px;\n  padding-right: calc(\n    var(--dsh-session-list-edge-inset)\n    - var(--dsh-session-list-scrollbar-width)\n    - var(--dsh-session-list-scrollbar-offset)\n  );\n  \n  padding-bottom: 16px;\n  scrollbar-gutter: stable;\n}\n\n.WorkspaceBrowser_flatList > * + *,\n.WorkspaceBrowser_searchTree > [role='treeitem'] + [role='treeitem'],\n.WorkspaceBrowser_groupSection > * + * {\n  margin-top: 2px;\n}\n\n.WorkspaceBrowser_searchStatus {\n  padding: 10px 12px;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n\n.WorkspaceBrowser_skeletonRow {\n  display: flex;\n  \n  align-items: flex-start;\n  gap: var(--dsh-sidebar-label-gap);\n  box-sizing: border-box;\n  min-height: 48px;\n  padding: 6px var(--dsh-sidebar-row-padding) 7px;\n}\n\n.WorkspaceBrowser_skeletonDot {\n  flex: none;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  corner-shape: round;\n}\n\n.WorkspaceBrowser_skeletonBars {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.WorkspaceBrowser_skeletonDot,\n.WorkspaceBrowser_skeletonBar {\n  background: var(--dsw-alias-bg-skeleton);\n  animation: WorkspaceBrowser_search-skeleton 2s cubic-bezier(0.36, 0, 0.64, 1) infinite;\n}\n\n.WorkspaceBrowser_skeletonBar {\n  width: 65%;\n  height: 16px;\n  border-radius: var(--dsw-radius-xs);\n}\n\n.WorkspaceBrowser_skeletonBarWide {\n  width: 90%;\n  height: 13px;\n}\n\n@keyframes WorkspaceBrowser_search-skeleton {\n  0% { opacity: 1; }\n  40% { opacity: 0.6; }\n  80%, 100% { opacity: 1; }\n}\n\n\n.WorkspaceBrowser_groupSection {\n  position: relative;\n}\n\n.WorkspaceBrowser_groupSection + .WorkspaceBrowser_groupSection {\n  margin-top: 4px;\n}\n\n.WorkspaceBrowser_listTopDropIndicator,\n.WorkspaceBrowser_workspaceDropBefore::before,\n.WorkspaceBrowser_workspaceDropAfter::after {\n  content: '';\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  height: 12px;\n  background:\n    linear-gradient(\n      55deg,\n      transparent calc(50% - 1px),\n      var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),\n      transparent calc(50% + 1px)\n    ) 0 0 / 5px 7px no-repeat,\n    linear-gradient(\n      125deg,\n      transparent calc(50% - 1px),\n      var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),\n      transparent calc(50% + 1px)\n    ) 0 5px / 5px 7px no-repeat,\n    linear-gradient(\n      var(--dsw-alias-state-business-primary) 0 0\n    ) 4px 5px / calc(100% - 4px) 2px no-repeat;\n  pointer-events: none;\n}\n\n\n.WorkspaceBrowser_listTopDropIndicator {\n  top: -8px;\n  left: 0;\n  right: var(--dsh-session-list-edge-inset);\n}\n\n.WorkspaceBrowser_listTopDropActive > .WorkspaceBrowser_workspaceDropBefore:first-child::before {\n  display: none;\n}\n\n.WorkspaceBrowser_workspaceDropBefore::before {\n  top: -8px;\n}\n\n.WorkspaceBrowser_workspaceDropAfter::after {\n  bottom: -8px;\n}\n\n.WorkspaceBrowser_sessionOverflowButton {\n  width: 100%;\n  height: 28px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  padding: 0 var(--dsh-sidebar-row-padding) 0 calc(var(--dsh-sidebar-row-padding) + 16px + var(--dsh-sidebar-label-gap) + var(--dsh-workspace-indent, 0px));\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  font-size: 12px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.WorkspaceBrowser_groupSection > .WorkspaceBrowser_sessionOverflowButton {\n  margin-top: 0;\n}\n\n@media (hover: hover) {\n  .WorkspaceBrowser_sessionOverflowButton:hover {\n    background: transparent;\n    color: var(--dsw-alias-label-secondary);\n  }\n}\n\n.WorkspaceBrowser_empty {\n  padding: 16px 12px;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 13px;\n}\n\n.WorkspaceBrowser_emptyState {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  margin-top: 80px;\n  padding: 0 12px;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.WorkspaceBrowser_emptyState > svg {\n  margin-bottom: 4px;\n  color: var(--dsw-alias-label-caption);\n}\n\n.WorkspaceBrowser_emptyAction {\n  padding: 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 20px;\n  color: var(--dsw-alias-link);\n}\n\n\n.WorkspaceBrowser_renameInput {\n  box-sizing: border-box;\n  width: 100%;\n  height: 44px;\n  padding: 7px 14px;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-lg);\n  outline: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 22px;\n  color: var(--dsw-alias-label-primary);\n}\n\n.WorkspaceBrowser_renameInput:disabled {\n  color: var(--dsw-alias-label-dimmed);\n}\n\n.WorkspaceBrowser_renameError {\n  margin-top: 8px;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.WorkspaceBrowser_deleteAction:not(:disabled) {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.WorkspaceBrowser_deleteStatus {\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-secondary);\n}\n\n\n.WorkspaceBrowser_archiveActivity {\n  margin: 0 0 8px;\n  padding-left: 18px;\n  font-size: 13px;\n  line-height: 20px;\n  color: var(--dsw-alias-label-primary);\n}\n\n.WorkspaceBrowser_archiveActivity li {\n  overflow-wrap: anywhere;\n}\n\n@media (pointer: coarse) {\n  .WorkspaceBrowser_searchInput,\n  .WorkspaceBrowser_renameInput {\n    font-size: 16px;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .WorkspaceBrowser_wide {\n    animation: none;\n  }\n\n  .WorkspaceBrowser_skeletonDot,\n  .WorkspaceBrowser_skeletonBar {\n    animation: none;\n  }\n\n  .WorkspaceBrowser_root:not(.WorkspaceBrowser_rail) .WorkspaceBrowser_sectionHeader.WorkspaceBrowser_searchSpacingMotion,\n  .WorkspaceBrowser_search,\n  .WorkspaceBrowser_sectionLabel,\n  .WorkspaceBrowser_searchSlot,\n  .WorkspaceBrowser_searchInput,\n  .WorkspaceBrowser_headerActions {\n    transition: none;\n  }\n}\n\n.Rows_projectRow,\n.Rows_sessionRow {\n  display: flex;\n  align-items: center;\n  gap: var(--dsh-sidebar-label-gap);\n  border-radius: var(--dsw-radius-md);\n  border-inline: var(--dsh-sidebar-paint-inset) solid transparent;\n  background-clip: padding-box;\n  box-sizing: border-box;\n  padding: 0 8px;\n  padding-inline-start: calc(var(--dsh-sidebar-row-padding) - var(--dsh-sidebar-paint-inset) + var(--dsh-workspace-indent, 0px));\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  color: var(--dsw-alias-label-primary);\n}\n\n@media (hover: hover) {\n  .Rows_projectRow:hover {\n    background-color: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.Rows_sessionRow.Rows_selected {\n  background-color: var(--dsw-alias-interactive-bg-hover);\n}\n\n.Rows_dragPreview {\n  background: var(--dsw-specific-sidebar-fill);\n}\n\n.Rows_searchResultRow {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 100%;\n  min-height: 48px;\n  box-sizing: border-box;\n  border: none;\n  border-radius: var(--dsw-radius-lg);\n  padding: 4px calc(var(--dsh-sidebar-row-padding) - var(--dsh-sidebar-paint-inset));\n  border-inline: var(--dsh-sidebar-paint-inset) solid transparent;\n  background: transparent;\n  background-clip: padding-box;\n  cursor: pointer;\n  text-align: left;\n  color: var(--dsw-alias-label-primary);\n}\n\n@media (hover: hover) {\n  .Rows_searchResultRow:hover {\n    background-color: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n.Rows_searchResultRow.Rows_selected {\n  background-color: var(--dsw-alias-interactive-bg-hover);\n}\n\n.Rows_searchResultHeading {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n}\n\n.Rows_searchResultTitle {\n  flex: 0 1 auto;\n  min-width: 0;\n  margin: 0 var(--dsh-sidebar-label-gap);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.Rows_searchResultMeta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n  margin-left: calc(16px + var(--dsh-sidebar-label-gap));\n}\n\n.Rows_searchResultWorkspace,\n.Rows_searchResultSnippet {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 12px;\n  line-height: 17px;\n}\n\n.Rows_searchResultWorkspace {\n  flex: none;\n  max-width: 40%;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n\n.Rows_searchResultWorkspace:only-child {\n  max-width: 100%;\n}\n\n.Rows_searchResultSnippet {\n  flex: 1;\n  min-width: 0;\n  color: var(--dsw-alias-label-secondary);\n}\n\n\n.Rows_projectRow {\n  height: 34px;\n  align-items: center;\n  box-sizing: border-box;\n}\n\n.Rows_projectRow .Rows_rowActions {\n  height: 20px;\n}\n\n\n.Rows_sessionRow {\n  height: 32px;\n  gap: 0;\n}\n\n.Rows_sessionRow .Rows_title {\n  margin: 0 6px 0 var(--dsh-sidebar-label-gap);\n}\n\n.Rows_slot {\n  flex: none;\n  width: 16px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.Rows_visuallyHidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n}\n\n.Rows_folderActive {\n  color: var(--dsw-alias-state-business-primary);\n}\n\n\n\n.Rows_projectRow .Rows_chevron { display: none; }\n@media (hover: hover) {\n  .Rows_projectRow:hover .Rows_chevron { display: inline-flex; }\n\n  .Rows_projectRow:hover .Rows_folder { display: none; }\n}\n\n\n.Rows_arrow {\n  transition: transform 150ms var(--ds-ease-in-out);\n}\n\n.Rows_arrowOpen {\n  transform: rotate(90deg);\n}\n\n.Rows_projectText {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.Rows_title {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.Rows_renameInput {\n  min-width: 0;\n  font-size: 14px;\n  line-height: 20px;\n  padding: 0 2px;\n  border: 0.5px solid var(--dsw-alias-border-l4);\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-button-elevated-fill);\n  color: inherit;\n  outline: none;\n}\n\n\n.Rows_sessionRow .Rows_title {\n  flex: 1;\n}\n\n\n.Rows_sessionRow .Rows_title[data-scrolled] {\n  mask-image: linear-gradient(to right, transparent, #000 12px);\n}\n\n.Rows_sessionRow .Rows_title[data-clipped] {\n  mask-image: linear-gradient(to left, transparent, #000 12px);\n}\n\n.Rows_sessionRow .Rows_title[data-scrolled][data-clipped] {\n  mask-image: linear-gradient(to right, transparent, #000 12px, #000 calc(100% - 12px), transparent);\n}\n\n.Rows_meta {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 12px;\n  line-height: 20px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.Rows_time {\n  flex: none;\n  font-size: 10px;\n  line-height: 16px;\n  color: var(--dsw-alias-label-tertiary);\n  margin-inline-end: -1px;\n}\n\n.Rows_pinIndicator {\n  display: inline-flex;\n  flex: none;\n  width: 16px;\n  height: 20px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 6px;\n  color: var(--dsw-alias-label-caption);\n}\n\n\n.Rows_sessionRow.Rows_archived .Rows_title,\n.Rows_searchResultRow.Rows_archived .Rows_searchResultTitle,\n.Rows_searchResultRow.Rows_archived .Rows_searchResultWorkspace,\n.Rows_searchResultRow.Rows_archived .Rows_searchResultSnippet {\n  color: var(--dsw-alias-label-caption);\n}\n\n.Rows_dot {\n  flex: none;\n}\n\n\n.Rows_rowActions {\n  flex: none;\n  display: none;\n  align-items: center;\n  gap: 13px;\n}\n\n@media (hover: hover) {\n  .Rows_projectRow:hover .Rows_rowActions,\n  .Rows_searchResultRow:hover .Rows_rowActions {\n    display: inline-flex;\n  }\n}\n\n.Rows_projectRow.Rows_menuOpen .Rows_rowActions {\n  display: inline-flex;\n}\n\n.Rows_rowQuickActions {\n  display: contents;\n}\n\n\n.Rows_searchResultHeading .Rows_rowActions {\n  margin-left: auto;\n}\n\n.Rows_rowResting {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.Rows_rowResting .Rows_pinIndicator {\n  margin-left: 0;\n}\n\n\n@media (hover: hover) {\n  .Rows_sessionRow:hover {\n    background-color: var(--dsw-alias-interactive-bg-hover);\n  }\n\n  .Rows_sessionRow:hover .Rows_rowActions,\n  .Rows_sessionRow.Rows_menuOpen .Rows_rowActions,\n  html[data-input-modality='keyboard'] .Rows_sessionRow:focus-within .Rows_rowActions {\n    display: inline-flex;\n  }\n\n  .Rows_sessionRow:hover .Rows_rowResting,\n  .Rows_sessionRow.Rows_menuOpen .Rows_rowResting,\n  html[data-input-modality='keyboard'] .Rows_sessionRow:focus-within .Rows_rowResting {\n    display: none;\n  }\n\n  .Rows_sessionRow:hover .Rows_title,\n  .Rows_sessionRow.Rows_menuOpen .Rows_title {\n    text-overflow: clip;\n  }\n}\n\n@media (hover: none) {\n  .Rows_projectRow .Rows_rowActions,\n  .Rows_searchResultRow .Rows_rowActions,\n  .Rows_sessionRow .Rows_rowActions {\n    display: inline-flex;\n  }\n\n  \n  .Rows_sessionRow .Rows_timestamp,\n  .Rows_sessionRow:has(.Rows_pinnedAction) .Rows_pinIndicator,\n  .Rows_sessionRow .Rows_rowQuickActions > [data-slot] > :not(.Rows_pinnedAction),\n  .Rows_projectRow[aria-expanded='false'] .Rows_rowActions {\n    display: none;\n  }\n\n  .Rows_sessionRow .Rows_pinnedAction {\n    \n    order: -1;\n  }\n}\n\n\n.Rows_projectRow.Rows_menuOpen,\n.Rows_sessionRow.Rows_menuOpen {\n  background-color: var(--dsw-alias-interactive-bg-hover);\n}\n\n\n.Rows_sessionRow.Rows_dropBefore,\n.Rows_sessionRow.Rows_dropAfter {\n  position: relative;\n}\n\n.Rows_sessionRow.Rows_dropBefore::before,\n.Rows_sessionRow.Rows_dropAfter::after {\n  content: '';\n  position: absolute;\n  z-index: 1;\n  left: calc(-1 * var(--dsh-sidebar-paint-inset));\n  right: calc(4px - var(--dsh-sidebar-paint-inset));\n  height: 12px;\n  background:\n    linear-gradient(\n      55deg,\n      transparent calc(50% - 1px),\n      var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),\n      transparent calc(50% + 1px)\n    ) 0 0 / 5px 7px no-repeat,\n    linear-gradient(\n      125deg,\n      transparent calc(50% - 1px),\n      var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px),\n      transparent calc(50% + 1px)\n    ) 0 5px / 5px 7px no-repeat,\n    linear-gradient(\n      var(--dsw-alias-state-business-primary) 0 0\n    ) 4px 5px / calc(100% - 4px) 2px no-repeat;\n  pointer-events: none;\n}\n\n.Rows_sessionRow.Rows_dropBefore::before {\n  top: -7px;\n}\n\n.Rows_sessionRow.Rows_dropAfter::after {\n  bottom: -7px;\n}\n\n\n.Rows_hoverContent {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.Rows_hoverTitle {\n  font-size: 14px;\n  line-height: 20px;\n  color: #FFFFFF;\n  overflow-wrap: break-word;\n}\n\n.Rows_hoverPath {\n  font-size: 12px;\n  line-height: 16px;\n  color: #CFD3D6;\n  word-break: break-all;\n}\n\n.Rows_hoverTime {\n  font-size: 12px;\n  line-height: 16px;\n  color: #CFD3D6;\n}\n\n.Rows_hoverStatus {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  line-height: 20px;\n  color: #ADB2B8;\n}\n\n\n.Rows_hoverArchived svg {\n  flex-shrink: 0;\n  margin: 0 -4px;\n}\n\n\n.Rows_iconButton {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  margin: -4px;\n  border: none;\n  border-radius: var(--dsw-radius-xs);\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n\n.Rows_iconButton:focus-visible {\n  outline-offset: -2px;\n}\n\n@media (hover: hover) {\n  .Rows_iconButton:hover {\n    color: var(--dsw-alias-label-primary);\n  }\n}\n\n\n.Rows_chevron {\n  color: var(--dsw-alias-label-caption);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .Rows_arrow {\n    animation: none;\n    transition: none;\n  }\n}\n";
window.__ModuleLoader__.load({
  id: "dsh-lab-sidebar",
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// packages/lab-sidebar/src/client/index.tsx
var index_exports = {};
__export(index_exports, {
  apply: () => apply2,
  inject: () => inject2
});
module.exports = __toCommonJS(index_exports);

// packages/lab-sidebar/src/client/plugin/client/index.ts
var import_dsh_client_ui_primitives9 = require("@deepseek-ai/dsh-client-ui-primitives");

// packages/lab-sidebar/src/client/plugin/client/session-actions/SessionMenu.tsx
var import_react = require("react");
function SessionMenu({ target, dismiss, renderSlot }) {
  const hookContext = (0, import_react.useMemo)(() => [true, (open) => {
    if (!open) dismiss();
  }], [dismiss]);
  if (target.kind !== "session") return null;
  return renderSlot("sidebar.workspaces.session.menu.item", target.value, {
    hookContext
  });
}

// packages/lab-sidebar/src/client/plugin/client/index.ts
var import_dsh_client_store4 = require("@deepseek-ai/dsh-client-store");
var import_dsh_client_ui_primitives10 = require("@deepseek-ai/dsh-client-ui-primitives");

// packages/lab-sidebar/src/client/plugin/client/contract/slots.ts
var menuOpenStateFactory = (_standard, state) => () => state;

// packages/lab-sidebar/src/client/plugin/client/shortcuts.ts
var import_dsh_client_store = require("@deepseek-ai/dsh-client-store");
function createWorkspaceShortcutControls() {
  const state = (0, import_dsh_client_store.createSnapshotStore)({
    searchRequest: 0,
    addRequested: false,
    directoryBusy: false,
    renameTarget: null
  });
  return {
    state,
    search: () => {
      state.set({ ...state.getSnapshot(), searchRequest: state.getSnapshot().searchRequest + 1 });
    },
    add: () => {
      state.set(state.getSnapshot().directoryBusy ? state.getSnapshot() : { ...state.getSnapshot(), addRequested: true });
    },
    closeAdd: () => {
      state.set({ ...state.getSnapshot(), addRequested: false });
    },
    directoryBusy: (busy) => {
      state.set({ ...state.getSnapshot(), directoryBusy: busy });
    },
    rename: (sessionId, currentTitle) => {
      state.set({ ...state.getSnapshot(), renameTarget: { sessionId, currentTitle } });
    },
    closeRename: () => {
      state.set({ ...state.getSnapshot(), renameTarget: null });
    }
  };
}
function installWorkspaceShortcuts(ctx, navigation, controls, archiveSession, reportForkFailure) {
  const t = ctx.locale.bind("workspace");
  const current = () => Object.values(ctx.sessions.list.getSnapshot().byId).find((row) => (row.retainedBy.mainView ?? 0) > 0);
  const addReason = () => ctx.slots.entries("sidebar.workspaces.directoryFlow").length === 0 ? t("shortcut.noPicker") : controls.state.getSnapshot().directoryBusy ? t("shortcut.directoryBusy") : null;
  const register = (id, label, aliases, code, modifiers, webModifiers, resolve) => {
    ctx.effect(() => ctx.shortcuts.register({
      id,
      label,
      aliases,
      defaults: {
        "desktop:macos": { code, modifiers },
        "desktop:windows": { code, modifiers },
        "desktop:linux": { code, modifiers },
        "web:macos": { code, modifiers: webModifiers },
        "web:windows": { code, modifiers: webModifiers }
      },
      regions: ["page", "editable"],
      modals: ["sidebar"],
      resolve
    }), `ui-workspace: ${id}`);
  };
  register(
    "session.new",
    () => t("session.new"),
    ["new session", "new chat"],
    "KeyN",
    ["primary"],
    ["primary", "alt"],
    () => ({ status: "handled", run: () => {
      navigation.startSession();
    } })
  );
  register(
    "session.search",
    () => t("search.sessions.aria"),
    ["search sessions"],
    "KeyK",
    ["primary"],
    ["primary", "alt"],
    () => ({ status: "handled", run: controls.search })
  );
  register(
    "workspace.add",
    () => t("workspace.add"),
    ["add workspace", "open folder"],
    "KeyO",
    ["primary"],
    ["primary", "alt"],
    () => {
      const reason = addReason();
      return reason === null ? { status: "handled", run: controls.add } : { status: "blocked", reason };
    }
  );
  register("session.rename", () => t("rename.session.title"), ["rename session"], "KeyG", ["primary", "alt"], ["primary", "alt"], (context) => {
    const target = current();
    return target === void 0 || target.blank || context.modal !== null && context.modal !== "sidebar" || ctx.layout.panelInfo.getSnapshot().activePanelId !== null ? { status: "blocked", reason: t("shortcut.noSession") } : { status: "handled", run: () => {
      controls.rename(target.id, target.title?.trim() ?? "");
    } };
  });
  register("session.fork", () => t("menu.fork"), ["fork session"], "KeyF", ["primary", "alt"], ["primary", "shift"], () => {
    const target = current();
    if (target === void 0) return { status: "blocked", reason: t("shortcut.noSession") };
    if (target.blank) return { status: "blocked", reason: t("shortcut.noCompletedTurn") };
    return { status: "handled", run: () => {
      void navigation.forkSession(target.id).catch((error) => {
        const unavailable = error instanceof Error && error.name === "SessionForkError" && error.rpcError.code === "session/fork-unavailable";
        reportForkFailure(unavailable ? "unavailable" : "failed");
        if (!unavailable) console.warn("session fork rejected:", error);
      });
    } };
  });
  register("session.archive", () => t("menu.archiveSession"), ["archive session"], "KeyA", ["primary", "shift"], ["primary", "alt"], () => {
    const target = current();
    return target === void 0 ? { status: "blocked", reason: t("shortcut.noSession") } : { status: "handled", run: () => {
      archiveSession(target.id);
    } };
  });
}

// packages/lab-sidebar/src/client/plugin/client/navigation.ts
var import_cordis = require("@deepseek-ai/cordis");
var import_dsh_client_store3 = require("@deepseek-ai/dsh-client-store");

// packages/lab-sidebar/src/client/plugin/client/stores.ts
var import_dsh_client_store2 = require("@deepseek-ai/dsh-client-store");

// node_modules/@deepseek-ai/dsh-util-values/lib/index.js
var SIMPLE_ESCAPES = {
  '"': '"',
  "\\": "\\",
  "/": "/",
  b: "\b",
  f: "\f",
  n: "\n",
  r: "\r",
  t: "	"
};
var CONTENT_ESCAPE = /[\\\u0000-\u001f]/u;
function isWhitespace(c) {
  return c === " " || c === "\n" || c === "\r" || c === "	";
}
function isHex(c) {
  return c >= "0" && c <= "9" || c >= "a" && c <= "f" || c >= "A" && c <= "F";
}
var PartialArguments = class PartialArguments2 {
  /** The view of a call with no arguments available. */
  static EMPTY = PartialArguments2.fromObject({});
  /**
  * View finished argument text without scanning it until a reader asks.
  * @param text - the complete argument JSON text.
  * @returns a sealed view.
  */
  static fromText(text) {
    const view = new PartialArguments2();
    view.append(text);
    view.sealed = true;
    return view;
  }
  /**
  * View an already parsed argument payload, such as a PTC dispatch object.
  * @param value - the parsed argument value.
  * @returns a sealed view; a non-object payload has no fields.
  */
  static fromObject(value) {
    const view = new PartialArguments2();
    view.object = typeof value === "object" && value !== null && !Array.isArray(value) ? value : {};
    view.sealed = true;
    return view;
  }
  /**
  * The source: text so far or a parsed object, plus whether it can still grow.
  * These are the only enumerable fields, so two views over the same source
  * compare equal structurally however far each has been read.
  */
  chunks = [];
  object;
  sealed = false;
  #ends = [];
  #size = 0;
  #consumed = 0;
  #mode = "root";
  #escape = false;
  #keyStart = 0;
  #keyEscaped = false;
  #key = "";
  #current = null;
  #nestedEnds = [];
  #nestedInString = false;
  #invalidAt;
  #invalidValue = false;
  #entries = /* @__PURE__ */ new Map();
  #order = [];
  #reads = /* @__PURE__ */ new Map();
  /** Whether this view rejects further appends; does not scan text or register reads. */
  get isSealed() {
    return this.sealed;
  }
  /** Whether indexing or a content read found invalid JSON; unread value contents are not validated. */
  get invalid() {
    this.scan();
    return this.#mode === "invalid" || this.#invalidValue;
  }
  /**
  * Retain streamed argument text without scanning or comparing observed answers.
  * @param fragment - the text following every fragment appended before.
  */
  append(fragment) {
    if (this.sealed) throw new Error("PartialArguments: cannot append to a sealed view");
    if (fragment.length === 0) return;
    this.chunks.push(fragment);
    this.#size += fragment.length;
    this.#ends.push(this.#size);
  }
  /**
  * Reconcile a streamed prefix with authoritative complete text without joining the fragments.
  * @param text - the final argument text, which replaces missing or conflicting deltas.
  * @returns this view sealed with its caches retained when every character matches; otherwise a new sealed view.
  */
  settle(text) {
    if (this.object !== void 0 || text.length !== this.#size) return PartialArguments2.fromText(text);
    let offset = 0;
    for (const chunk of this.chunks) {
      if (!text.startsWith(chunk, offset)) return PartialArguments2.fromText(text);
      offset += chunk.length;
    }
    this.chunks = text.length === 0 ? [] : [text];
    this.#ends = text.length === 0 ? [] : [text.length];
    this.sealed = true;
    return this;
  }
  /**
  * Compare observed answers and advance their publication baseline. Unread views remain unscanned.
  * @returns whether any observed answer changed since its first read or the preceding refresh.
  */
  refresh() {
    if (this.#reads.size === 0) return false;
    this.scan();
    let changed = false;
    let completions = false;
    for (const read of this.#reads.values()) {
      if (read.completion) {
        completions = true;
        continue;
      }
      changed = this.refreshRead(read) || changed;
    }
    if (completions) {
      for (const read of this.#reads.values()) if (read.completion) changed = this.refreshRead(read) || changed;
    }
    if (this.sealed) this.#reads.clear();
    return changed;
  }
  refreshRead(read) {
    const now = read.answer();
    if (Object.is(now, read.last)) return false;
    read.last = now;
    return true;
  }
  /**
  * Check whether no further fields can arrive.
  * @returns whether the outer object closed, indexing failed, or the view is sealed; unread values are not validated.
  */
  closed() {
    return this.remember("closed", "", () => this.closedNow());
  }
  /**
  * List discovered fields in first-appearance order.
  * @returns top-level keys seen so far, in first-appearance order.
  */
  keys() {
    return this.remember("keys", "", () => this.keysNow(), (keys) => keys.length);
  }
  /**
  * Check whether a top-level field has appeared.
  * @param key - argument name.
  * @returns whether the field has appeared (a string opened or another value began).
  */
  has(key) {
    return this.remember("has", key, () => this.hasNow(key));
  }
  /**
  * Check whether a field's closing delimiter has arrived, without validating its contents.
  * @param key - argument name.
  * @returns whether its delimiter arrived and no content reader has reported an error for this value.
  */
  complete(key) {
    return this.remember("complete", key, () => this.completeNow(key));
  }
  /**
  * Read string length without materializing its text.
  * @param key - argument name.
  * @param options - change granularity for a streaming string.
  * @returns decoded UTF-16 length of the string field so far; undefined when absent or not a string.
  */
  stringLength(key, options) {
    const step = Math.max(1, Math.floor(options?.step ?? 1));
    const offset = options?.offset ?? 0;
    return this.remember(`length:${step}:${offset}`, key, () => this.lengthNow(key), (length) => length === void 0 ? void 0 : Math.ceil((length + offset) / step));
  }
  /**
  * Check a string against a decoded UTF-16 length limit without materializing it.
  * @param key - argument name.
  * @param maxLength - decoded UTF-16 limit, floored to at least zero.
  * @returns whether the string is longer than the limit; false when absent or not a string.
  */
  stringExceeds(key, maxLength) {
    const limit = Math.max(0, Math.floor(maxLength));
    return this.remember(`exceeds:${limit}`, key, () => (this.lengthNow(key, limit + 1) ?? 0) > limit);
  }
  /**
  * Read a decoded string, including a streaming prefix.
  * @param key - argument name.
  * @returns the string field's decoded text so far; undefined when absent or not a string.
  */
  text(key) {
    return this.remember("text", key, () => this.textNow(key));
  }
  /**
  * Read at most the first decoded UTF-16 units of a string.
  * @param key - argument name.
  * @param maxLength - maximum decoded UTF-16 length, floored to at least one.
  * @returns the bounded string prefix; undefined when absent or not a string.
  */
  textPrefix(key, maxLength) {
    const limit = Math.max(1, Math.floor(maxLength));
    return this.remember(`prefix:${limit}`, key, () => this.textPrefixNow(key, limit));
  }
  /**
  * Read a completed non-string argument.
  * @param key - argument name.
  * @returns the parsed non-string value once it closed; undefined while open, absent, or a string.
  */
  value(key) {
    return this.remember("value", key, () => this.valueNow(key));
  }
  /** Answer a question and, on a streaming view, remember it for change detection. */
  remember(kind, key, read, comparison) {
    this.scan();
    const result = read();
    if (!this.sealed) {
      const id = `${kind}/${key}`;
      if (!this.#reads.has(id)) this.#reads.set(id, {
        completion: kind === "complete",
        answer: comparison === void 0 ? read : () => comparison(read()),
        last: comparison === void 0 ? result : comparison(result)
      });
    }
    return result;
  }
  closedNow() {
    return this.sealed || this.#mode === "closed" || this.#mode === "invalid";
  }
  keysNow() {
    return this.object === void 0 ? this.#order : Object.keys(this.object);
  }
  hasNow(key) {
    return this.object === void 0 ? this.#entries.has(key) : Object.hasOwn(this.object, key);
  }
  completeNow(key) {
    if (this.object !== void 0) return Object.hasOwn(this.object, key);
    const entry = this.#entries.get(key);
    return entry !== void 0 && entry.end >= 0 && (entry.kind === "string" ? entry.invalidAt === void 0 : !entry.invalid);
  }
  lengthNow(key, limit = Number.POSITIVE_INFINITY) {
    if (this.object !== void 0) {
      const field = Object.hasOwn(this.object, key) ? this.object[key] : void 0;
      return typeof field === "string" ? field.length : void 0;
    }
    const entry = this.#entries.get(key);
    if (entry?.kind !== "string") return void 0;
    if (entry.text !== void 0 && entry.text.at === entry.end) return entry.text.length;
    const read = entry.length ??= {
      at: entry.start,
      length: 0,
      text: ""
    };
    this.readString(entry, read, limit, false);
    return read.length;
  }
  textNow(key) {
    if (this.object !== void 0) {
      const field = Object.hasOwn(this.object, key) ? this.object[key] : void 0;
      return typeof field === "string" ? field : void 0;
    }
    const entry = this.#entries.get(key);
    if (entry?.kind !== "string") return void 0;
    if (entry.text === void 0 && entry.end >= 0 && entry.needsDecoding && entry.invalidAt === void 0) {
      let text;
      try {
        text = JSON.parse(`"${this.slice(entry.start, entry.end)}"`);
      } catch (_error) {
      }
      if (text !== void 0) entry.text = {
        at: entry.end,
        length: text.length,
        text
      };
    }
    const read = entry.text ??= {
      at: entry.start,
      length: 0,
      text: ""
    };
    this.readString(entry, read, Number.POSITIVE_INFINITY, true);
    return read.text;
  }
  textPrefixNow(key, maxLength) {
    if (this.object !== void 0) {
      const field = Object.hasOwn(this.object, key) ? this.object[key] : void 0;
      return typeof field === "string" ? field.slice(0, maxLength) : void 0;
    }
    const entry = this.#entries.get(key);
    if (entry?.kind !== "string") return void 0;
    const prefixes = entry.prefixes ??= /* @__PURE__ */ new Map();
    let read = prefixes.get(maxLength);
    if (read === void 0) {
      read = {
        at: entry.start,
        length: 0,
        text: ""
      };
      prefixes.set(maxLength, read);
    }
    this.readString(entry, read, maxLength, true);
    return read.text;
  }
  valueNow(key) {
    if (this.object !== void 0) {
      if (!Object.hasOwn(this.object, key)) return void 0;
      const field = this.object[key];
      return typeof field === "string" ? void 0 : field;
    }
    const entry = this.#entries.get(key);
    if (entry?.kind !== "value" || entry.end < 0 || entry.invalid) return void 0;
    if (entry.parsed === void 0) try {
      entry.parsed = JSON.parse(this.slice(entry.start, entry.end));
    } catch (_error) {
      entry.invalid = true;
      this.#invalidValue = true;
    }
    return entry.parsed;
  }
  chunkAt(at) {
    let low = 0;
    let high = this.#ends.length;
    while (low < high) {
      const mid = low + high >>> 1;
      if (this.#ends[mid] <= at) low = mid + 1;
      else high = mid;
    }
    return low;
  }
  /** Materialize only a requested range, never the cumulative source. */
  slice(start, end) {
    if (start >= end) return "";
    const first = this.chunkAt(start);
    const last = this.chunkAt(end - 1);
    const base = first === 0 ? 0 : this.#ends[first - 1];
    if (first === last) return this.chunks[first].slice(start - base, end - base);
    const parts = [this.chunks[first].slice(start - base)];
    for (let i = first + 1; i < last; i++) parts.push(this.chunks[i]);
    parts.push(this.chunks[last].slice(0, end - this.#ends[last - 1]));
    return parts.join("");
  }
  readString(entry, read, limit, materialize) {
    const end = Math.min(entry.end < 0 ? this.#consumed : entry.end, entry.invalidAt ?? Number.POSITIVE_INFINITY, this.#invalidAt ?? Number.POSITIVE_INFINITY);
    if (!entry.needsDecoding) {
      const length = Math.min(end - read.at, limit - read.length);
      if (length <= 0) return;
      if (materialize) read.text += this.slice(read.at, read.at + length);
      read.at += length;
      read.length += length;
      return;
    }
    let chunkIndex = this.chunkAt(read.at);
    while (read.at < end && read.length < limit) {
      const base = chunkIndex === 0 ? 0 : this.#ends[chunkIndex - 1];
      const chunk = this.chunks[chunkIndex];
      const remaining = chunk.slice(read.at - base, Math.min(chunk.length, end - base));
      const boundary = remaining.search(CONTENT_ESCAPE);
      const length = Math.min(boundary < 0 ? remaining.length : boundary, limit - read.length);
      if (length > 0) {
        if (materialize) read.text += remaining.slice(0, length);
        read.at += length;
        read.length += length;
        if (read.at === base + chunk.length) chunkIndex++;
        continue;
      }
      const type = remaining.length > 1 ? remaining[1] : read.at + 1 < end ? this.chunks[chunkIndex + 1][0] : void 0;
      let decoded;
      let width = 2;
      if (remaining[0] === "\\" && type === void 0 && entry.end < 0) return;
      if (remaining[0] === "\\" && type === "u") {
        const hex = this.slice(read.at + 2, Math.min(end, read.at + 6));
        let valid = true;
        for (let i = 0; i < hex.length; i++) if (!isHex(hex[i])) valid = false;
        if (valid) {
          if (hex.length < 4 && entry.end < 0) return;
          if (hex.length === 4) decoded = String.fromCharCode(Number.parseInt(hex, 16));
        }
        width = 6;
      } else if (remaining[0] === "\\" && type !== void 0) decoded = SIMPLE_ESCAPES[type];
      if (decoded === void 0) {
        entry.invalidAt = read.at;
        this.#invalidValue = true;
        return;
      }
      if (materialize) read.text += decoded;
      read.length++;
      read.at += width;
      while (chunkIndex < this.chunks.length && read.at >= this.#ends[chunkIndex]) chunkIndex++;
    }
  }
  /** Locate new field ranges without decoding or parsing their contents. */
  scan() {
    if (this.object !== void 0 || this.#consumed === this.#size) return;
    for (let i = this.chunkAt(this.#consumed); i < this.chunks.length && this.#invalidAt === void 0; i++) {
      const pending = this.chunks[i];
      const base = i === 0 ? 0 : this.#ends[i - 1];
      for (let index = this.#consumed - base; index < pending.length && this.#mode !== "invalid"; index++) {
        if (this.#mode === "string" || this.#mode === "nested" && this.#nestedInString) {
          const end = this.stringBoundary(pending, index);
          this.#consumed += end - index;
          index = end;
          if (index === pending.length) break;
        }
        this.step(pending[index], this.#consumed);
        this.#consumed++;
      }
    }
  }
  /** Only raw quotes and their preceding backslash runs can terminate a string. */
  stringBoundary(fragment, start) {
    let at = start;
    while (true) {
      const quote = fragment.indexOf('"', at);
      const end = quote < 0 ? fragment.length : quote;
      if (this.#mode === "string") {
        const entry = this.#current;
        if (!entry.needsDecoding && CONTENT_ESCAPE.test(fragment.slice(at, end))) entry.needsDecoding = true;
      }
      let slashStart = end;
      while (slashStart > at && fragment[slashStart - 1] === "\\") slashStart--;
      const escaped = (end - slashStart) % 2 === 1 !== (slashStart === at && this.#escape);
      this.#escape = quote < 0 && escaped;
      if (quote < 0 || !escaped) return end;
      at = quote + 1;
    }
  }
  step(c, at) {
    switch (this.#mode) {
      case "root":
        if (isWhitespace(c)) return;
        if (c === "{") {
          this.#mode = "key-or-end";
          return;
        }
        this.fail();
        return;
      case "key-or-end":
        if (isWhitespace(c)) return;
        if (c === "}") {
          this.#mode = "closed";
          return;
        }
        if (c === '"') {
          this.beginKey(at);
          return;
        }
        this.fail();
        return;
      case "key-only":
        if (isWhitespace(c)) return;
        if (c === '"') {
          this.beginKey(at);
          return;
        }
        this.fail();
        return;
      case "key":
        this.stepKey(c, at);
        return;
      case "colon":
        if (isWhitespace(c)) return;
        if (c === ":") {
          this.#mode = "value";
          return;
        }
        this.fail();
        return;
      case "value":
        this.beginValue(c, at);
        return;
      case "string": {
        const entry = this.#current;
        entry.end = at;
        this.#current = null;
        this.#mode = "comma-or-end";
        return;
      }
      case "scalar":
        this.stepScalar(c, at);
        return;
      case "nested":
        this.stepNested(c, at);
        return;
      case "comma-or-end":
        if (isWhitespace(c)) return;
        if (c === ",") {
          this.#mode = "key-only";
          return;
        }
        if (c === "}") {
          this.#mode = "closed";
          return;
        }
        this.fail();
        return;
      case "closed":
        if (isWhitespace(c)) return;
        this.fail();
        return;
      /* v8 ignore next 2 -- scan() stops stepping once the view is invalid. */
      case "invalid":
        return;
      /* v8 ignore next 2 -- Every scanner mode has a handler above. */
      default:
        assertNever(this.#mode);
    }
  }
  fail() {
    this.#invalidAt = this.#consumed;
    this.#mode = "invalid";
    this.#current = null;
  }
  beginKey(at) {
    this.#mode = "key";
    this.#keyStart = at + 1;
    this.#keyEscaped = false;
    this.#escape = false;
  }
  stepKey(c, at) {
    if (c < " ") {
      this.fail();
      return;
    }
    if (this.#escape) {
      this.#escape = false;
      return;
    }
    if (c === "\\") {
      this.#escape = true;
      this.#keyEscaped = true;
      return;
    }
    if (c !== '"') return;
    const raw = this.slice(this.#keyStart, at);
    if (this.#keyEscaped) try {
      this.#key = JSON.parse(`"${raw}"`);
    } catch (_error) {
      this.fail();
      return;
    }
    else this.#key = raw;
    this.#mode = "colon";
  }
  open(entry) {
    if (!this.#entries.has(this.#key)) this.#order.push(this.#key);
    this.#entries.set(this.#key, entry);
    this.#current = entry;
  }
  beginValue(c, at) {
    if (isWhitespace(c)) return;
    if (c === '"') {
      this.open({
        kind: "string",
        start: at + 1,
        end: -1,
        needsDecoding: false,
        invalidAt: void 0,
        length: void 0,
        text: void 0,
        prefixes: void 0
      });
      this.#escape = false;
      this.#mode = "string";
      return;
    }
    if (c === "}" || c === "," || c === ":" || c === "]") {
      this.fail();
      return;
    }
    this.open({
      kind: "value",
      start: at,
      end: -1,
      parsed: void 0,
      invalid: false
    });
    if (c === "{" || c === "[") {
      this.#mode = "nested";
      this.#nestedEnds = [c === "{" ? "}" : "]"];
      this.#nestedInString = false;
      this.#escape = false;
      return;
    }
    this.#mode = "scalar";
  }
  stepScalar(c, at) {
    if (c !== "," && c !== "}" && !isWhitespace(c)) return;
    this.closeValue(at);
    this.#mode = c === "," ? "key-only" : c === "}" ? "closed" : "comma-or-end";
  }
  stepNested(c, at) {
    if (this.#nestedInString) {
      this.#nestedInString = false;
      return;
    }
    if (c === '"') {
      this.#nestedInString = true;
      return;
    }
    if (c === "{" || c === "[") {
      this.#nestedEnds.push(c === "{" ? "}" : "]");
      return;
    }
    if (c === "}" || c === "]") {
      if (this.#nestedEnds.pop() !== c) {
        this.fail();
        return;
      }
      if (this.#nestedEnds.length === 0) {
        this.closeValue(at + 1);
        this.#mode = "comma-or-end";
      }
    }
  }
  closeValue(end) {
    const entry = this.#current;
    entry.end = end;
    this.#current = null;
  }
};
function assertNever(value, context) {
  const rendered = JSON.stringify(value) ?? String(value);
  throw new Error(`unreachable variant${context ? ` in ${context}` : ""}: ${rendered}`);
}

// node_modules/@deepseek-ai/dsh-util-workspace-path/lib/index.js
function isWindowsStylePath(value) {
  return /^[A-Za-z]:[/\\]/.test(value) || value.startsWith("\\\\");
}
function abbreviateHomePath(path, home) {
  if (home === void 0 || home === "") return path;
  if (isWindowsStylePath(path) || isWindowsStylePath(home)) return path;
  const root = home.replace(/\/+$/, "");
  if (root === "" || root === "/") return path;
  if (path.replace(/\/+$/, "") === root) return "~";
  if (path.startsWith(`${root}/`)) return `~${path.slice(root.length)}`;
  return path;
}
function workspaceTitleOf(path) {
  const trimmed = path.replace(/[/\\]+$/, "");
  const separator = Math.max(trimmed.lastIndexOf("/"), trimmed.lastIndexOf("\\"));
  return trimmed.slice(separator + 1);
}

// packages/lab-sidebar/src/client/plugin/client/tree.ts
var UNGROUPED_KEY = "";
function owningGroupKey(workspaces, sessionId) {
  return workspaces.find((workspace) => workspace.sessionIds.includes(sessionId))?.workspaceId ?? UNGROUPED_KEY;
}
function mainSessionId(list) {
  return Object.values(list.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id;
}
function workspaceLabel(cwd) {
  if (cwd === void 0 || cwd === "") return "";
  const base = workspaceTitleOf(cwd);
  return base !== "" ? base : cwd;
}
function orderByRecency(sessionIds, summaries) {
  return sessionIds.flatMap((id) => {
    const summary = summaries[id];
    if (summary === void 0) return [];
    return [{ id, rank: summary.updatedAt }];
  }).sort((a, b) => {
    if (a.rank !== b.rank) return b.rank - a.rank;
    return a.id < b.id ? -1 : 1;
  }).map((member) => member.id);
}
function reconcileManualOrder(memberIds, savedOrder, summaries, rowState) {
  const members = new Map(memberIds.map((id) => [id, id]));
  const included = /* @__PURE__ */ new Set();
  const ordered = [];
  for (const key of savedOrder ?? []) {
    const id = members.get(key);
    if (id === void 0 || included.has(key)) continue;
    ordered.push(id);
    included.add(key);
  }
  const archived = new Set(rowState?.archivedSessionIds);
  const pins = [];
  for (const sessionId of rowState?.pinnedSessionIds ?? []) {
    const id = members.get(sessionId);
    if (id === void 0 || included.has(id) || archived.has(id) || summaries[id] === void 0) continue;
    pins.push(id);
    included.add(id);
  }
  const ordinary = [];
  const archives = [];
  for (const id of orderByRecency([...members.values()].filter((id2) => !included.has(id2)), summaries)) {
    if (archived.has(id)) archives.push(id);
    else ordinary.push(id);
  }
  return [...pins, ...ordered, ...ordinary, ...archives];
}
function pinCurrentBlank(order, currentBlank) {
  if (currentBlank === void 0) return [...order];
  return [currentBlank, ...order.filter((id) => id !== currentBlank)];
}
function sessionVisible(session, current, archived, archivedFilter) {
  if (session.origin === "subagent") return false;
  if (session.blank && session.id !== current) return false;
  switch (archivedFilter) {
    case "default":
      return !archived.has(session.id);
    case "show":
      return true;
    case "only":
      return archived.has(session.id);
    /* v8 ignore next 2 -- closed-union backstop; only reached if the filter is forged */
    default:
      return assertNever(archivedFilter);
  }
}
function sectionMembers(members, pinned, archived) {
  const placeholders = [];
  const leading = [];
  const rest = [];
  for (const member of members) {
    if (member.blank) placeholders.push(member);
    else if (!archived.has(member.id) && pinned.has(member.id)) leading.push(member);
    else rest.push(member);
  }
  return [...placeholders, ...leading, ...rest];
}
function sessionTitle(session) {
  return session.blank ? "" : session.title?.trim() ?? "";
}
function buildGroup(key, workspaceId, cwd, createdAt, label, members) {
  return { key, workspaceId, cwd, createdAt, label, sessions: [...members] };
}
function orderedUngrouped(members, stored, summaries) {
  const byId = new Map(members.map((session) => [session.id, session]));
  const ids = stored === void 0 ? orderByRecency(members.map((session) => session.id), summaries) : reconcileManualOrder(members.map((session) => session.id), stored, summaries);
  return ids.flatMap((id) => {
    const session = byId.get(id);
    return session === void 0 ? [] : [session];
  });
}
function groupByWorkspace(list, workspaces, archived, archivedFilter, ungroupedOrder) {
  const current = mainSessionId(list);
  const groups = [];
  const accounted = /* @__PURE__ */ new Set();
  for (const workspace of workspaces) {
    const members = [];
    for (const id of workspace.sessionIds) {
      const summary = list.byId[id];
      if (summary === void 0) continue;
      accounted.add(id);
      if (!sessionVisible(summary, current, archived, archivedFilter)) continue;
      members.push(summary);
    }
    if (archivedFilter === "only" && members.length === 0) continue;
    groups.push(buildGroup(
      workspace.workspaceId,
      workspace.workspaceId,
      workspace.path,
      Date.parse(workspace.createdAt),
      workspace.title,
      members
    ));
  }
  const stray = list.ids.map((id) => list.byId[id]).filter((s) => s !== void 0 && !accounted.has(s.id) && sessionVisible(s, current, archived, archivedFilter));
  if (stray.length > 0) {
    groups.push(buildGroup(
      UNGROUPED_KEY,
      void 0,
      void 0,
      void 0,
      "",
      orderedUngrouped(stray, ungroupedOrder, list.byId)
    ));
  }
  return groups;
}
function visiblePendingKind(kind) {
  switch (kind) {
    case "approval":
    case "plan-review":
    case "question":
      return kind;
    default:
      return void 0;
  }
}
function runningChildCount(list, parentId, statuses) {
  return list.projectionsBySession[parentId]?.values.subagentCatalog?.reduce(
    (count, child) => count + ((statuses.get(child.id)?.running ?? list.byId[child.id]?.running) === true ? 1 : 0),
    0
  ) ?? 0;
}
function sessionNode(s, list, statuses, pinned, archived) {
  const status = statuses.get(s.id);
  const pendingInteraction = visiblePendingKind(status?.pendingInteraction?.kind);
  return {
    id: s.id,
    title: sessionTitle(s),
    blank: s.blank,
    running: status?.running ?? s.running,
    runningSubagentCount: runningChildCount(list, s.id, statuses),
    completed: status?.completionUnread === true,
    pinned: !archived.has(s.id) && pinned.has(s.id),
    archived: archived.has(s.id),
    updatedAt: s.updatedAt,
    ...s.cwd === void 0 || s.cwd === "" ? {} : { cwd: s.cwd },
    ...pendingInteraction === void 0 ? {} : { pendingInteraction }
  };
}
function deriveGroups(list, workspaces, rowState, statuses, view) {
  const archived = new Set(rowState.archivedSessionIds);
  const pinned = new Set(rowState.pinnedSessionIds);
  const expandedGroups = new Set(view.expandedGroups);
  const current = mainSessionId(list);
  const currentGroup = current === void 0 ? void 0 : owningGroupKey(workspaces, current);
  const groups = [];
  for (const g of groupByWorkspace(list, workspaces, archived, rowState.archivedFilter, view.ungroupedOrder)) {
    const expanded = expandedGroups.has(g.key);
    groups.push({
      key: g.key,
      workspaceId: g.workspaceId,
      cwd: g.cwd,
      createdAt: g.createdAt,
      label: g.label,
      sessionCount: g.sessions.length,
      expanded,
      containsCurrent: g.key === currentGroup,
      sessions: expanded ? sectionMembers(g.sessions, pinned, archived).map((session) => sessionNode(session, list, statuses, pinned, archived)) : []
    });
  }
  return groups;
}
function sessionMemberIds(list) {
  return visibleSessionIds(list, [], "show");
}
function visibleSessionIds(list, archivedSessionIds, archivedFilter) {
  const archived = new Set(archivedSessionIds);
  const current = mainSessionId(list);
  return list.ids.filter((id) => {
    const s = list.byId[id];
    return s !== void 0 && sessionVisible(s, current, archived, archivedFilter);
  });
}
function deriveFlat(list, sessionIds, rowState, statuses) {
  const archived = new Set(rowState.archivedSessionIds);
  const pinned = new Set(rowState.pinnedSessionIds);
  const current = mainSessionId(list);
  const members = sessionIds.flatMap((id) => {
    const session = list.byId[id];
    return session !== void 0 && sessionVisible(session, current, archived, rowState.archivedFilter) ? [session] : [];
  });
  return sectionMembers(members, pinned, archived).map((session) => sessionNode(session, list, statuses, pinned, archived));
}
function deriveSearchResults(list, workspaces, query, archivedSessionIds, archivedFilter, statuses, content, limit) {
  const q = query.trim().toLowerCase();
  if (q === "") return { items: [], hasMore: false };
  const archived = new Set(archivedSessionIds);
  const current = mainSessionId(list);
  const workspaceBySession = /* @__PURE__ */ new Map();
  for (const workspace of workspaces) {
    for (const sessionId of workspace.sessionIds) {
      if (!workspaceBySession.has(sessionId)) workspaceBySession.set(sessionId, workspace.title);
    }
  }
  const labelOf = (summary) => workspaceBySession.get(summary.id) ?? workspaceLabel(summary.cwd);
  const contentBySession = /* @__PURE__ */ new Map();
  for (const item of content.items) {
    if (!contentBySession.has(item.sessionId)) contentBySession.set(item.sessionId, item);
  }
  const local = [];
  for (const id of list.ids) {
    const summary = list.byId[id];
    if (summary === void 0 || summary.blank || !sessionVisible(summary, current, archived, archivedFilter)) continue;
    if (sessionTitle(summary).toLowerCase().includes(q) || labelOf(summary).toLowerCase().includes(q) || summary.id.toLowerCase().includes(q)) {
      local.push(summary);
    }
  }
  const localById = new Map(local.map((summary) => [summary.id, summary]));
  const orderedLocal = orderByRecency(local.map((summary) => summary.id), list.byId).map((id) => localById.get(id));
  const ordered = [];
  const included = /* @__PURE__ */ new Set();
  const include = (summary) => {
    if (included.has(summary.id)) return;
    included.add(summary.id);
    ordered.push(summary);
  };
  for (const summary of orderedLocal) include(summary);
  for (const item of content.items) {
    const summary = list.byId[item.sessionId];
    if (summary !== void 0 && !summary.blank && sessionVisible(summary, current, archived, archivedFilter)) include(summary);
  }
  return {
    items: ordered.slice(0, limit).map((summary) => {
      const match = contentBySession.get(summary.id);
      const status = statuses.get(summary.id);
      const pendingInteraction = visiblePendingKind(status?.pendingInteraction?.kind);
      return {
        id: summary.id,
        title: sessionTitle(summary),
        workspace: labelOf(summary),
        running: status?.running ?? summary.running,
        runningSubagentCount: runningChildCount(list, summary.id, statuses),
        ...pendingInteraction === void 0 ? {} : { pendingInteraction },
        completed: status?.completionUnread === true,
        archived: archived.has(summary.id),
        ...match === void 0 ? {} : { snippet: match.snippet }
      };
    }),
    hasMore: content.hasMore || ordered.length > limit
  };
}
function folderPath(path) {
  const windows = /^[A-Za-z]:[/\\]/.test(path) || path.startsWith("\\\\");
  return (windows ? path.replaceAll("\\", "/") : path).replace(/\/+$/, "");
}
function owningParentFolder(path, parents) {
  const child = folderPath(path);
  let owner;
  let length = -1;
  for (const parent of parents) {
    const root = folderPath(parent);
    if (root.length > length && child !== root && child.startsWith(`${root}/`)) {
      owner = parent;
      length = root.length;
    }
  }
  return owner;
}

// packages/lab-sidebar/src/client/plugin/client/stores.ts
var FLAT_SESSION_ORDER_KEY = "__flat_session_order__";
function copySessionOrders(orders) {
  return Object.fromEntries(Object.entries(orders).map(([key, order]) => [key, [...order]]));
}
function createWorkspaceViewStore() {
  return (0, import_dsh_client_store2.defineStore)({
    init: () => ({
      groupBy: "workspace",
      orderBy: "updated",
      groupExpansion: {},
      sessionOrderByAccount: {},
      archivedFilter: "default"
    }),
    persist: "dsh.workspace.view.v5",
    actions: {
      setGroupBy: (d, mode) => {
        d.groupBy = mode;
      },
      setOrderBy: (d, mode, initialOrders) => {
        if (mode === d.orderBy) return;
        d.sessionOrderByAccount = mode === "manual" ? copySessionOrders(initialOrders) : {};
        d.orderBy = mode;
      },
      setGroupExpanded: (d, key, expanded) => {
        d.groupExpansion[key] = expanded;
      },
      retainAccountKeys: (d, workspaceKeys) => {
        const retained = new Set(workspaceKeys);
        d.groupExpansion = Object.fromEntries(
          Object.entries(d.groupExpansion).filter(([key]) => retained.has(key))
        );
        d.sessionOrderByAccount = Object.fromEntries(
          Object.entries(d.sessionOrderByAccount).filter(([key]) => retained.has(key))
        );
        delete d.sessionUpdatedAtByAccount;
      },
      syncSessionOrders: (d, orders) => {
        if (d.orderBy !== "manual") return;
        Object.assign(d.sessionOrderByAccount, copySessionOrders(orders));
      },
      setSessionOrder: (d, accountKey, order, initialOrders) => {
        if (d.orderBy === "updated") d.sessionOrderByAccount = copySessionOrders(initialOrders);
        else Object.assign(d.sessionOrderByAccount, copySessionOrders(initialOrders));
        d.orderBy = "manual";
        d.sessionOrderByAccount[accountKey] = [...order];
      },
      pinSessionOrder: (d, sessionId, accountKeys, source) => {
        const selected = new Set(accountKeys);
        d.sessionOrderByAccount = Object.fromEntries(Object.entries(source.members).map(([key, members]) => {
          const order = reconcileManualOrder(members, d.sessionOrderByAccount[key], source.summaries, source.rowState);
          return [key, selected.has(key) ? [sessionId, ...order.filter((id) => id !== sessionId)] : order];
        }));
      },
      setArchivedFilter: (d, filter) => {
        d.archivedFilter = filter;
      }
    }
  });
}

// packages/lab-sidebar/src/client/plugin/client/pin-order.ts
function pinOrderSource(workspaces, list, rowState) {
  const accounted = new Set(workspaces.flatMap((workspace) => workspace.sessionIds));
  return {
    members: Object.fromEntries([
      ...workspaces.map((workspace) => [workspace.workspaceId, workspace.sessionIds]),
      [UNGROUPED_KEY, list.ids.filter((id) => list.byId[id] !== void 0 && !accounted.has(id))],
      [FLAT_SESSION_ORDER_KEY, sessionMemberIds(list)]
    ]),
    summaries: list.byId,
    rowState
  };
}
function pinOrderAccounts(workspaces, sessionId) {
  return [owningGroupKey(workspaces, sessionId), FLAT_SESSION_ORDER_KEY];
}

// packages/lab-sidebar/src/client/plugin/client/navigation.ts
var DirectoryBrowseError = class extends Error {
  /** @param rpcError - Host directory business failure. */
  constructor(rpcError) {
    super(`directory browse failed: ${rpcError.code}: ${rpcError.message}`);
    this.rpcError = rpcError;
  }
  name = "DirectoryBrowseError";
};
var UiWorkspaceService = class extends import_cordis.Service {
  /**
   * @param ctx - Client root Context.
   * @param directoryPicker - the directory-picking Remote namespace.
   * @param workspaces - pure Workspace Controller.
   * @param sessions - pure Session Controller.
   * @param view - the browser's viewing-store write set (one instance shared with its registration).
   * @param notify - show one notice through the Workspace notice channel.
   */
  constructor(ctx, directoryPicker, workspaces, sessions, view, notify) {
    super(ctx, "uiWorkspace");
    this.directoryPicker = directoryPicker;
    this.workspaces = workspaces;
    this.sessions = sessions;
    this.view = view;
    this.notify = notify;
    ctx.effect(() => {
      const stop = this.watchNavigation();
      return () => {
        stop();
        this.lifetime.abort();
        const reference = this.mainReference;
        this.mainReference = void 0;
        reference?.release();
      };
    }, "ui-workspace: Workspace navigation policy");
  }
  /** The latest in-flight connection per Workspace; a request joins it only when both name the same preset. */
  connecting = /* @__PURE__ */ new Map();
  lifetime = new AbortController();
  selection = (0, import_dsh_client_store3.createSnapshotStore)(
    {},
    { persist: { name: "dsh.sessions.current" } }
  );
  mainReference;
  restorationNavigation;
  connectWorkspace(workspaceId, options = {}) {
    return this.connectBlank(workspaceId, options);
  }
  /**
   * @param reuse - preset for the reused or created blank.
   */
  async connectBlank(workspaceId, reuse) {
    const workspace = this.workspaces.list.getSnapshot().items.find((item) => item.workspaceId === workspaceId);
    if (workspace === void 0) {
      throw new Error(`uiWorkspace.connectWorkspace: unknown workspace ${workspaceId}`);
    }
    const inflight = this.connecting.get(workspaceId);
    if (inflight !== void 0 && inflight.agentPreset === reuse.agentPreset) return inflight.attempt;
    const attempt = this.createInWorkspace(workspace, reuse).finally(() => {
      if (this.connecting.get(workspaceId)?.attempt === attempt) this.connecting.delete(workspaceId);
    });
    this.connecting.set(workspaceId, { agentPreset: reuse.agentPreset, attempt });
    return attempt;
  }
  /** Name the first reusable member blank; a requested preset also skips blanks listing another preset. */
  createInWorkspace(workspace, options) {
    const archived = this.workspaces.list.getSnapshot().archivedSessionIds;
    const sessions = this.sessions.list.getSnapshot();
    const blank = sessions.ids.find((id) => {
      const summary = sessions.byId[id];
      const listed = summary?.projectionValues?.agentPreset;
      return summary !== void 0 && summary.blank && summary.cwd === workspace.path && workspace.sessionIds.includes(id) && !archived.includes(id) && (options.agentPreset === void 0 || typeof listed !== "string" || listed === options.agentPreset);
    });
    return this.createNamed({
      workspaceId: workspace.workspaceId,
      ...blank === void 0 ? {} : { sessionId: blank },
      ...options.agentPreset === void 0 ? {} : { agentPreset: options.agentPreset }
    });
  }
  /**
   * Create through the Host. A named blank the Host declined may still read as
   * blank from stale cached list metadata, which hides it from the Session tree;
   * its projections are reloaded so the row reflects its log.
   */
  async createNamed(request) {
    const sessionId = await this.sessions.create(request);
    const named = request.sessionId;
    if (named !== void 0 && named !== sessionId) {
      void this.sessions.refreshProjections(named).catch((reason) => {
        console.warn("declined blank Session projection reload failed:", reason);
      });
    }
    return sessionId;
  }
  /**
   * Reopen a saved blank Session under the preset its log recorded, or under
   * the Host default once that preset no longer activates. Listed values are
   * cached hints that can lag the log after an unclean Host exit, so the
   * Session's projections are reloaded before the preset is read; a Session
   * that still awaits a format migration reloads only those cached hints.
   */
  async restoreBlank(workspaceId, sessionId) {
    await this.sessions.refreshProjections(sessionId);
    const recorded = this.sessions.list.getSnapshot().byId[sessionId]?.projectionValues?.agentPreset;
    const request = { workspaceId, sessionId };
    if (typeof recorded !== "string") return this.createNamed(request);
    try {
      return await this.createNamed({ ...request, agentPreset: recorded });
    } catch (error) {
      const code = sessionCreateErrorOf(error)?.rpcError.code;
      if (code !== "agent-preset/not-found" && code !== "agent-preset/invalid") throw error;
      return this.createNamed(request);
    }
  }
  openSession(target) {
    this.replaceMain(target, this.lifetime.signal, "reveal");
  }
  openWorkspace(workspaceId, beforeOpen, options = {}) {
    return this.openWorkspaceSession(workspaceId, beforeOpen, options);
  }
  async openWorkspaceSession(workspaceId, beforeOpen, reuse) {
    const navigation = AbortSignal.any([this.ctx.layout.beginNavigation(), this.lifetime.signal]);
    let sessionId;
    try {
      sessionId = await this.connectBlank(workspaceId, reuse);
    } catch (error) {
      if (!navigation.aborted) this.notify({ kind: "createFailed", message: creationFailureMessage(error) });
      throw error;
    }
    if (navigation.aborted) return;
    this.replaceMain(sessionId, navigation, "reveal", beforeOpen);
  }
  async forkSession(sessionId, onCreated, options) {
    return this.sessions.fork({
      sessionId,
      increaseTitle: true,
      ...onCreated === void 0 ? {} : { onCreated },
      ...options?.allowMigration === void 0 ? {} : { allowMigration: options.allowMigration }
    });
  }
  startSession(workspaceId, options) {
    const { agentPreset, ...draft } = options ?? {};
    const draftOptions = options === void 0 ? void 0 : draft;
    const initializeDraft = draftOptions !== void 0 && (draftOptions.prompt !== void 0 || (draftOptions.whenDraftExists ?? (draftOptions.clearPreviousDraft === true ? "replace" : "keep")) === "replace");
    const workspace = this.workspaces.list.getSnapshot();
    const sessions = this.sessions.list.getSnapshot();
    const current = this.mainReference?.sessionId;
    const currentWorkspaceId = current === void 0 ? void 0 : workspace.items.find((item) => item.sessionIds.includes(current))?.workspaceId;
    const recent = workspace.phase === "ready" && sessions.phase === "ready" ? recentWorkspace(workspace.items, sessions.byId) : void 0;
    const target = workspaceId ?? currentWorkspaceId ?? recent;
    if (target === void 0) {
      if (initializeDraft) {
        this.notify({ kind: "createFailed", message: this.ctx.locale.bind("workspace")("draft.workspaceRequired") });
        return;
      }
      this.clearMain();
      return;
    }
    const opening = this.openWorkspace(target, initializeDraft ? (id) => {
      const binding = this.sessions.binding(id);
      if (binding === void 0) this.draftPreparationFailed();
      this.prepareDraft(binding, draftOptions);
    } : void 0, agentPreset === void 0 ? {} : { agentPreset });
    void opening.catch(
      (reason) => {
        console.warn("new session failed:", reason);
      }
    );
  }
  prepareDraft(binding, options) {
    const conversation = this.ctx.get("conversation");
    if (conversation === void 0) this.draftPreparationFailed();
    if (conversation.input.requestDraftInitialization(binding, options) === "blocked") this.draftPreparationFailed();
  }
  draftPreparationFailed() {
    const message = this.ctx.locale.bind("workspace")("draft.initializationFailed");
    this.notify({ kind: "createFailed", message });
    throw new Error(message);
  }
  async archiveSession(sessionId, options = {}) {
    await this.workspaces.archiveSession(sessionId, options);
    if (this.mainReference?.sessionId === sessionId) this.clearMain();
  }
  async unarchiveSession(sessionId) {
    await this.workspaces.unarchiveSession(sessionId);
  }
  async pinSession(sessionId) {
    await this.workspaces.pinSession(sessionId);
    const { items, pinnedSessionIds, archivedSessionIds } = this.workspaces.list.getSnapshot();
    this.view.pinSessionOrder(
      sessionId,
      pinOrderAccounts(items, sessionId),
      pinOrderSource(items, this.sessions.list.getSnapshot(), { pinnedSessionIds, archivedSessionIds })
    );
  }
  async unpinSession(sessionId) {
    await this.workspaces.unpinSession(sessionId);
  }
  async pickDirectory() {
    const result = await this.directoryPicker.pick();
    if (!result.ok) throw new Error(`directory picker failed: ${result.error.message}`);
    return result.value;
  }
  async listDirectory(path, signal) {
    const result = await this.directoryPicker.list(path, signal);
    if (!result.ok) throw new DirectoryBrowseError(result.error);
    return result.value;
  }
  async createDirectory(path, name) {
    const result = await this.directoryPicker.createDirectory(path, name);
    if (!result.ok) throw new DirectoryBrowseError(result.error);
    return result.value;
  }
  whenAccess(workspaceId, action, callback) {
    const access = this.ctx.get("remoteAccess");
    if (access === void 0) throw new Error("ui-workspace: whenAccess requires the remoteAccess service");
    return access.whenResourceAccess("workspace", workspaceId, action, callback);
  }
  watchNavigation() {
    let initial = "waiting";
    const reconcile = () => {
      if (this.lifetime.signal.aborted) return;
      if (this.clearArchivedCurrent()) return;
      if (initial !== "waiting" || this.restorationNavigation?.aborted === true) return;
      const workspace = this.workspaces.list.getSnapshot();
      const sessions = this.sessions.list.getSnapshot();
      if (workspace.phase !== "ready" || sessions.phase !== "ready") return;
      if (this.mainReference !== void 0) {
        initial = "done";
        return;
      }
      initial = "connecting";
      void this.restoreSelection(workspace, sessions).then(
        () => {
          initial = "done";
        },
        (reason) => {
          if (this.lifetime.signal.aborted) return;
          initial = "waiting";
          console.warn("initial Session restoration failed:", reason);
        }
      );
    };
    const disposeWorkspaces = this.workspaces.list.subscribe(reconcile);
    const disposeSessions = this.sessions.list.subscribe(reconcile);
    reconcile();
    return () => {
      this.lifetime.abort();
      disposeSessions();
      disposeWorkspaces();
    };
  }
  async restoreSelection(workspaces, sessions) {
    const saved = this.selection.getSnapshot();
    if (saved.subagentAddress !== void 0) {
      this.replaceMain(saved.subagentAddress, this.lifetime.signal, "preserve");
      return;
    }
    const summary = saved.sessionId === void 0 ? void 0 : sessions.byId[saved.sessionId];
    const workspace = summary === void 0 ? void 0 : workspaces.items.find((item) => item.sessionIds.includes(summary.id));
    if (summary !== void 0 && (!summary.blank || workspace === void 0)) {
      this.replaceMain(summary.id, this.lifetime.signal, "preserve");
      return;
    }
    const navigation = AbortSignal.any([this.ctx.layout.beginNavigation(), this.lifetime.signal]);
    this.restorationNavigation = navigation;
    let sessionId;
    if (summary !== void 0 && workspace !== void 0 && summary.cwd === workspace.path && !workspaces.archivedSessionIds.includes(summary.id)) {
      sessionId = await this.restoreBlank(workspace.workspaceId, summary.id);
    }
    let target = workspace?.workspaceId ?? recentWorkspace(workspaces.items, sessions.byId);
    if (target === void 0 && workspaces.items.length === 0 && sessions.ids.length === 0) {
      const prepared = await this.initializeDefaultWorkspace(navigation);
      if (navigation.aborted) return;
      target = prepared?.workspaceId;
    }
    if (sessionId === void 0 && target !== void 0) sessionId = await this.connectWorkspace(target);
    if (sessionId !== void 0 && !navigation.aborted) {
      this.replaceMain(sessionId, navigation, "preserve");
    }
  }
  async initializeDefaultWorkspace(signal) {
    try {
      return await this.workspaces.initializeDefault(signal);
    } catch (_error) {
      if (!signal.aborted) this.notify({ kind: "defaultWorkspaceFailed" });
      return void 0;
    }
  }
  /** @returns true when an archived current selection was cleared. */
  clearArchivedCurrent() {
    const current = this.mainReference?.sessionId;
    if (current === void 0 || !this.workspaces.list.getSnapshot().archivedSessionIds.includes(current)) return false;
    this.clearMain();
    return true;
  }
  clearMain() {
    const previous = this.mainReference;
    this.mainReference = void 0;
    this.selection.set({});
    previous?.release();
    this.ctx.layout.selectPanel(null);
  }
  replaceMain(target, signal, panel, beforeOpen) {
    signal.throwIfAborted();
    const reference = this.sessions.retain(target, { source: "mainView" });
    try {
      signal.throwIfAborted();
      beforeOpen?.(reference.sessionId);
      if (signal.aborted) {
        reference.release();
        return;
      }
      const subagentAddress = typeof target === "string" ? this.sessions.subagentAddress(reference.sessionId) : target;
      this.selection.set({
        sessionId: reference.sessionId,
        ...subagentAddress === void 0 ? {} : { subagentAddress }
      });
    } catch (error) {
      reference.release();
      throw error;
    }
    const previous = this.mainReference;
    this.mainReference = reference;
    previous?.release();
    if (panel === "reveal") this.ctx.layout.selectPanel(null);
  }
};
function sessionCreateErrorOf(error) {
  return error instanceof Error && error.name === "SessionCreateError" ? error : void 0;
}
function creationFailureMessage(error) {
  const refused = sessionCreateErrorOf(error);
  if (refused !== void 0) return `${refused.rpcError.code}: ${refused.rpcError.message}`;
  return error instanceof Error ? error.message : String(error);
}
function recentWorkspace(workspaces, sessions) {
  let selected;
  let selectedTime = Number.NEGATIVE_INFINITY;
  for (const workspace of workspaces) {
    let latest = Number.NEGATIVE_INFINITY;
    for (const sessionId of workspace.sessionIds) {
      const session = sessions[sessionId];
      if (session !== void 0) latest = Math.max(latest, session.updatedAt);
    }
    if (latest === Number.NEGATIVE_INFINITY) latest = Date.parse(workspace.createdAt);
    if (selected === void 0 || latest > selectedTime) {
      selected = workspace.workspaceId;
      selectedTime = latest;
    }
  }
  return selected;
}

// packages/lab-sidebar/src/client/plugin/client/rows/WorkspaceBrowser.tsx
var import_react5 = require("react");

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// packages/lab-sidebar/src/client/plugin/client/rows/WorkspaceDialogs.tsx
var import_react2 = require("react");
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");

// packages/lab-sidebar/src/client/plugin/client/rows/WorkspaceBrowser.module.css
var WorkspaceBrowser_default = { "root": "WorkspaceBrowser_root", "rail": "WorkspaceBrowser_rail", "iconButton": "WorkspaceBrowser_iconButton", "searchButton": "WorkspaceBrowser_searchButton", "clearButton": "WorkspaceBrowser_clearButton", "viewOptionsMenu": "WorkspaceBrowser_viewOptionsMenu", "sectionHeader": "WorkspaceBrowser_sectionHeader", "searchSpacingMotion": "WorkspaceBrowser_searchSpacingMotion", "searchExpanded": "WorkspaceBrowser_searchExpanded", "sectionLabel": "WorkspaceBrowser_sectionLabel", "sectionLabelHidden": "WorkspaceBrowser_sectionLabelHidden", "searchSlot": "WorkspaceBrowser_searchSlot", "searchSlotExpanded": "WorkspaceBrowser_searchSlotExpanded", "headerActions": "WorkspaceBrowser_headerActions", "headerActionsHidden": "WorkspaceBrowser_headerActionsHidden", "search": "WorkspaceBrowser_search", "searchInput": "WorkspaceBrowser_searchInput", "listArea": "WorkspaceBrowser_listArea", "treeBody": "WorkspaceBrowser_treeBody", "fade": "WorkspaceBrowser_fade", "wide": "WorkspaceBrowser_wide", "list": "WorkspaceBrowser_list", "flatList": "WorkspaceBrowser_flatList", "searchTree": "WorkspaceBrowser_searchTree", "groupSection": "WorkspaceBrowser_groupSection", "searchStatus": "WorkspaceBrowser_searchStatus", "skeletonRow": "WorkspaceBrowser_skeletonRow", "skeletonDot": "WorkspaceBrowser_skeletonDot", "skeletonBars": "WorkspaceBrowser_skeletonBars", "skeletonBar": "WorkspaceBrowser_skeletonBar", "skeletonBarWide": "WorkspaceBrowser_skeletonBarWide", "listTopDropIndicator": "WorkspaceBrowser_listTopDropIndicator", "workspaceDropBefore": "WorkspaceBrowser_workspaceDropBefore", "workspaceDropAfter": "WorkspaceBrowser_workspaceDropAfter", "listTopDropActive": "WorkspaceBrowser_listTopDropActive", "sessionOverflowButton": "WorkspaceBrowser_sessionOverflowButton", "empty": "WorkspaceBrowser_empty", "emptyState": "WorkspaceBrowser_emptyState", "emptyAction": "WorkspaceBrowser_emptyAction", "renameInput": "WorkspaceBrowser_renameInput", "renameError": "WorkspaceBrowser_renameError", "deleteAction": "WorkspaceBrowser_deleteAction", "deleteStatus": "WorkspaceBrowser_deleteStatus", "archiveActivity": "WorkspaceBrowser_archiveActivity" };

// packages/lab-sidebar/src/client/plugin/client/rows/WorkspaceDialogs.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function WorkspaceDialogs({ request, workspaces, renameWorkspace, deleteWorkspace, settleWorkspaceAction, t }) {
  const composingRef = (0, import_react2.useRef)(false);
  const renameTarget = request.action === "rename" ? request : null;
  const [renameDraft, setRenameDraft] = (0, import_react2.useState)(request.displayTitle);
  const [renaming, setRenaming] = (0, import_react2.useState)(false);
  const [renameError, setRenameError] = (0, import_react2.useState)(null);
  const renameTrimmed = renameDraft.trim();
  const renameDuplicate = renameTarget !== null && renameTrimmed !== "" && workspaces.some((w) => w.workspaceId !== renameTarget.workspaceId && w.title === renameTrimmed);
  const renameBlocked = renaming || renameTrimmed === "" || renameTarget === null || renameTrimmed === renameTarget.storedTitle || renameDuplicate;
  const closeRename = () => {
    if (renaming) return;
    settleWorkspaceAction();
    setRenameError(null);
  };
  const confirmRename = () => {
    if (renameBlocked) return;
    setRenaming(true);
    setRenameError(null);
    renameWorkspace(renameTarget.workspaceId, renameTrimmed).then(() => {
      setRenaming(false);
      settleWorkspaceAction();
    }).catch((reason) => {
      setRenaming(false);
      setRenameError(reason instanceof Error ? reason.message : String(reason));
    });
  };
  const deleteTarget = request.action === "delete" ? request : null;
  const [deleting, setDeleting] = (0, import_react2.useState)(false);
  const [deleteCommittedId, setDeleteCommittedId] = (0, import_react2.useState)(null);
  const [deleteError, setDeleteError] = (0, import_react2.useState)(null);
  (0, import_react2.useEffect)(() => {
    if (deleteCommittedId === null || workspaces.some((workspace) => workspace.workspaceId === deleteCommittedId)) return;
    setDeleting(false);
    setDeleteCommittedId(null);
    settleWorkspaceAction();
  }, [deleteCommittedId, workspaces, settleWorkspaceAction]);
  const closeDelete = () => {
    if (deleting) return;
    settleWorkspaceAction();
    setDeleteError(null);
  };
  const confirmDelete = () => {
    if (deleting || deleteTarget === null) return;
    setDeleting(true);
    setDeleteCommittedId(null);
    setDeleteError(null);
    deleteWorkspace(deleteTarget.workspaceId).then(() => {
      setDeleteCommittedId(deleteTarget.workspaceId);
    }).catch((reason) => {
      setDeleting(false);
      setDeleteError(reason instanceof Error ? reason.message : String(reason));
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_dsh_client_ui_primitives.Modal,
      {
        open: renameTarget !== null,
        onClose: closeRename,
        closeLabel: t("close"),
        title: t("rename.workspace.title"),
        footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "outline", disabled: renaming, onClick: closeRename, children: t("cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "primary", disabled: renameBlocked, onClick: confirmRename, children: t("rename") })
        ] }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "input",
            {
              className: WorkspaceBrowser_default.renameInput,
              value: renameDraft,
              "aria-label": t("field.workspaceName"),
              "data-modal-autofocus": true,
              disabled: renaming,
              onFocus: (e) => {
                e.target.select();
              },
              onChange: (e) => {
                setRenameDraft(e.target.value);
                setRenameError(null);
              },
              onCompositionStart: () => {
                composingRef.current = true;
              },
              onCompositionEnd: () => {
                composingRef.current = false;
              },
              onKeyDown: (e) => {
                if (e.key === "Enter" && !composingRef.current) {
                  e.preventDefault();
                  confirmRename();
                }
              }
            }
          ),
          renameDuplicate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: WorkspaceBrowser_default.renameError, role: "alert", children: t("conflict.named", { name: renameTrimmed }) }),
          renameError !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: WorkspaceBrowser_default.renameError, role: "alert", children: renameError })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_dsh_client_ui_primitives.Modal,
      {
        open: deleteTarget !== null,
        onClose: closeDelete,
        closeLabel: t("close"),
        title: t("delete.workspace"),
        ...deleteTarget === null ? {} : { description: t("delete.desc", { name: deleteTarget.displayTitle }) },
        footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Button, { variant: "outline", disabled: deleting, onClick: closeDelete, children: t("cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_dsh_client_ui_primitives.Button,
            {
              variant: "outline",
              className: WorkspaceBrowser_default.deleteAction,
              disabled: deleting,
              onClick: confirmDelete,
              children: t("delete.workspace")
            }
          )
        ] }),
        children: [
          deleting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: WorkspaceBrowser_default.deleteStatus, role: "status", children: t("delete.pending") }),
          deleteError !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: WorkspaceBrowser_default.renameError, role: "alert", children: deleteError })
        ]
      }
    )
  ] });
}

// packages/lab-sidebar/src/client/plugin/client/rows/WorkspaceBrowser.tsx
var import_dsh_client_ui_primitives4 = require("@deepseek-ai/dsh-client-ui-primitives");

// node_modules/@deepseek-ai/dsh-api-workspace-controller/lib/types/default-workspace.js
var DEFAULT_WORKSPACE_DIRECTORY = "default-workspace";
function workspaceDisplayTitle(title, localizedDefault) {
  return title === DEFAULT_WORKSPACE_DIRECTORY ? localizedDefault : title;
}

// packages/lab-sidebar/src/client/plugin/client/rows/Rows.tsx
var import_react3 = require("react");
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");

// packages/lab-sidebar/src/client/plugin/client/rows/Rows.module.css
var Rows_default = { "projectRow": "Rows_projectRow", "sessionRow": "Rows_sessionRow", "selected": "Rows_selected", "dragPreview": "Rows_dragPreview", "searchResultRow": "Rows_searchResultRow", "searchResultHeading": "Rows_searchResultHeading", "searchResultTitle": "Rows_searchResultTitle", "searchResultMeta": "Rows_searchResultMeta", "searchResultWorkspace": "Rows_searchResultWorkspace", "searchResultSnippet": "Rows_searchResultSnippet", "rowActions": "Rows_rowActions", "title": "Rows_title", "slot": "Rows_slot", "visuallyHidden": "Rows_visuallyHidden", "folderActive": "Rows_folderActive", "chevron": "Rows_chevron", "folder": "Rows_folder", "arrow": "Rows_arrow", "arrowOpen": "Rows_arrowOpen", "projectText": "Rows_projectText", "renameInput": "Rows_renameInput", "meta": "Rows_meta", "time": "Rows_time", "pinIndicator": "Rows_pinIndicator", "archived": "Rows_archived", "dot": "Rows_dot", "menuOpen": "Rows_menuOpen", "rowQuickActions": "Rows_rowQuickActions", "rowResting": "Rows_rowResting", "timestamp": "Rows_timestamp", "pinnedAction": "Rows_pinnedAction", "dropBefore": "Rows_dropBefore", "dropAfter": "Rows_dropAfter", "hoverContent": "Rows_hoverContent", "hoverTitle": "Rows_hoverTitle", "hoverPath": "Rows_hoverPath", "hoverTime": "Rows_hoverTime", "hoverStatus": "Rows_hoverStatus", "hoverArchived": "Rows_hoverArchived", "iconButton": "Rows_iconButton" };

// packages/lab-sidebar/src/client/plugin/client/rows/Rows.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var DRAG_PREVIEW_PROPERTIES = [
  "--dsh-sidebar-row-padding",
  "--dsh-sidebar-label-gap",
  "--dsh-sidebar-paint-inset"
];
function displayTitle(node, t) {
  return node.blank ? t("session.new") : node.title || t("session.untitled");
}
var MIN_TITLE_REVEAL_PX = 8;
var TITLE_MARQUEE_PX_PER_MS = 0.03;
function placeTitle(title, left, range) {
  if (typeof title.scrollTo === "function") title.scrollTo({ left, behavior: "instant" });
  else title.scrollLeft = left;
  if (left > 0) title.dataset.scrolled = "";
  else delete title.dataset.scrolled;
  if (left < range) title.dataset.clipped = "";
  else delete title.dataset.clipped;
}
function restTitle(title) {
  if (typeof title.scrollTo === "function") title.scrollTo({ left: 0, behavior: "instant" });
  else title.scrollLeft = 0;
  delete title.dataset.scrolled;
  delete title.dataset.clipped;
}
function useTitleMarquee(title) {
  const frame = (0, import_react3.useRef)(0);
  const revealing = (0, import_react3.useRef)(false);
  (0, import_react3.useEffect)(() => () => {
    cancelAnimationFrame(frame.current);
  }, []);
  return (0, import_react3.useMemo)(() => ({
    enter: (event) => {
      if (event?.pointerType === "touch") return;
      if (title.current === null) return;
      if (revealing.current) return;
      revealing.current = true;
      const element = title.current;
      const range = element.scrollWidth - element.clientWidth;
      if (range <= MIN_TITLE_REVEAL_PX) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        placeTitle(element, range, range);
        return;
      }
      cancelAnimationFrame(frame.current);
      let previous;
      let position = 0;
      const step = (now) => {
        position += previous === void 0 ? 0 : (now - previous) * TITLE_MARQUEE_PX_PER_MS;
        previous = now;
        placeTitle(element, Math.min(position, range), range);
        if (position < range) frame.current = requestAnimationFrame(step);
      };
      frame.current = requestAnimationFrame(step);
    },
    leave: () => {
      revealing.current = false;
      cancelAnimationFrame(frame.current);
      if (title.current === null) return;
      restTitle(title.current);
    }
  }), [title]);
}
function timeLabel(updatedAt, now, t) {
  const { unit, n } = (0, import_dsh_client_ui_primitives2.relativeTime)(updatedAt, now);
  return unit === "now" ? t("time.now") : t(`time.${unit}`, { n });
}
function hoverTimeLabel(updatedAt, now, t) {
  const { unit, n } = (0, import_dsh_client_ui_primitives2.relativeTime)(updatedAt, now);
  return unit === "now" ? t("time.now") : t("time.ago", { t: t(`time.${unit}`, { n }) });
}
function createdLabel(createdAt, t) {
  const d = new Date(createdAt);
  const pad2 = (v) => String(v).padStart(2, "0");
  const date = t("date.ymd", { y: d.getFullYear(), m: d.getMonth() + 1, d: d.getDate() });
  return t("hover.created", { time: `${date} ${pad2(d.getHours())}:${pad2(d.getMinutes())}` });
}
function WorkspaceHoverContent({ label, cwd, createdAt, t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: Rows_default.hoverContent, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Rows_default.hoverTitle, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Rows_default.hoverPath, children: cwd }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Rows_default.hoverTime, children: createdLabel(createdAt, t) })
  ] });
}
function rowHalf(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  return e.clientY < rect.top + rect.height / 2 ? "before" : "after";
}
function ProjectRowItem(props) {
  const workspaceId = props.group.workspaceId;
  return workspaceId === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(UngroupedProjectRow, { ...props }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(WorkspaceProjectRow, { ...props, workspaceId });
}
function UngroupedProjectRow(props) {
  const create = props.useRemoteAccess("session/create");
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ProjectRow, { ...props, access: { create, reorder: false } });
}
function WorkspaceProjectRow({ workspaceId, ...props }) {
  const { useWorkspaceAccess } = props;
  const access = {
    create: useWorkspaceAccess(workspaceId, "session/create"),
    reorder: useWorkspaceAccess(workspaceId, "workspace/insertBefore")
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ProjectRow, { ...props, access });
}
function ProjectRow({
  group,
  containsCurrentDescendant = false,
  onToggle,
  onCreate,
  drag: offeredDrag,
  home,
  newShortcut,
  t,
  access,
  openWorkspaceMenu,
  useContextMenuTarget,
  useContextMenu
}) {
  const { getTriggerProps } = useContextMenu();
  const drag = access.reorder ? offeredDrag : void 0;
  const row = group;
  const label = row.workspaceId === void 0 ? t("group.ungrouped") : row.label;
  const active = containsCurrentDescendant || group.expanded && group.containsCurrent;
  const menuOpen = useContextMenuTarget((target) => target?.kind === "workspace" && target.value.workspaceId === row.workspaceId);
  const dragPreview = (0, import_dsh_client_ui_primitives2.useRowDragPreview)(Rows_default.dragPreview, DRAG_PREVIEW_PROPERTIES);
  const workspaceMenuTarget = row.workspaceId !== void 0 && row.cwd !== void 0 ? { workspaceId: row.workspaceId, path: row.cwd } : void 0;
  const ownRow = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: clsx_default(Rows_default.projectRow, menuOpen && Rows_default.menuOpen),
      "data-row-key": `workspace:${group.key}`,
      role: "treeitem",
      "aria-expanded": row.expanded,
      onClick: onToggle,
      ...getTriggerProps(workspaceMenuTarget === void 0 ? void 0 : { kind: "workspace", value: { ...workspaceMenuTarget, displayTitle: label } }),
      draggable: drag !== void 0,
      onDragStart: drag === void 0 ? void 0 : (e) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", row.key);
        drag.start();
        dragPreview.start(e);
      },
      onDragEnd: () => {
        if (dragPreview.clear()) drag?.end();
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: clsx_default(Rows_default.slot, Rows_default.folder, active && Rows_default.folderActive), children: row.expanded ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconFolderOpenRegular, {}) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconFolderCloseRegular, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: clsx_default(Rows_default.slot, Rows_default.chevron), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconTriangleRightFillRegular, { className: clsx_default(Rows_default.arrow, row.expanded && Rows_default.arrowOpen) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.projectText, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.title, children: label }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: Rows_default.rowActions, children: [
          workspaceMenuTarget !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: Rows_default.iconButton,
              "data-context-menu-trigger": true,
              "aria-label": t("actions.workspace.aria", { name: label }),
              "aria-haspopup": "menu",
              "aria-expanded": menuOpen,
              onClick: (event) => {
                event.stopPropagation();
                const rect = event.currentTarget.getBoundingClientRect();
                openWorkspaceMenu(workspaceMenuTarget.workspaceId, workspaceMenuTarget.path, label, { x: rect.left, y: rect.bottom }, "toggle");
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconEllipsisOutlineRegular, {})
            }
          ),
          access.create && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.Tooltip, { label: t("actions.newSession"), shortcutKeys: newShortcut?.keys, side: "bottom", align: "end", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: Rows_default.iconButton,
              "aria-keyshortcuts": newShortcut?.aria,
              "aria-label": t("actions.newSession.aria", { name: label }),
              onClick: (e) => {
                e.stopPropagation();
                onCreate();
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconNewChatOutlineRegular, { size: 14 })
            }
          ) })
        ] })
      ]
    }
  );
  if (row.createdAt === void 0) return ownRow;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_dsh_client_ui_primitives2.HoverCard,
    {
      anchor: ownRow,
      content: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        WorkspaceHoverContent,
        {
          label: row.label,
          cwd: row.cwd === void 0 ? void 0 : abbreviateHomePath(row.cwd, home),
          createdAt: row.createdAt,
          t
        }
      ),
      openDelayMs: 800,
      grouped: true,
      disabled: menuOpen,
      copyText: row.cwd,
      copyLabel: t("copy"),
      copiedLabel: t("hover.copied")
    }
  );
}
function assertNever2(value) {
  throw new Error(`unknown pending interaction: ${String(value)}`);
}
function sessionStatuses(node, t) {
  const subagents = node.runningSubagentCount === 0 ? void 0 : {
    state: "ongoing",
    label: t(
      node.runningSubagentCount === 1 ? "status.subagentsRunning.one" : "status.subagentsRunning.other",
      { n: node.runningSubagentCount }
    )
  };
  let pending;
  switch (node.pendingInteraction) {
    case "approval":
      pending = {
        state: "warning",
        label: t("status.waitingApproval"),
        trailingLabel: t("status.compact.approval")
      };
      break;
    case "plan-review":
      pending = {
        state: "warning",
        label: t("status.planReview"),
        trailingLabel: t("status.compact.planReview")
      };
      break;
    case "question":
      pending = {
        state: "warning",
        label: t("status.waitingAnswer"),
        trailingLabel: t("status.compact.answer")
      };
      break;
    case void 0:
      break;
    /* v8 ignore next -- closed PendingInteractionStatus union */
    default:
      return assertNever2(node.pendingInteraction);
  }
  if (pending !== void 0) return subagents === void 0 ? [pending] : [pending, subagents];
  if (node.running) {
    const primary = { state: "ongoing", label: t("status.running") };
    return subagents === void 0 ? [primary] : [primary, subagents];
  }
  if (subagents !== void 0) return [subagents];
  if (node.completed) return [{ state: "done", label: t("status.completed") }];
  return [{ state: "idle", label: t("status.idle") }];
}
function SessionStatusDots({ statuses }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.StateDot, { state: statuses[0].state }),
    statuses.map((status) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.visuallyHidden, children: status.label }, status.label))
  ] });
}
function PinnedIndicator({ t }) {
  const label = t("row.pinned");
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.pinIndicator, role: "img", "aria-label": label, title: label, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconPinFillRegular, { size: 14 }) });
}
function SessionHoverContent({ node, cwd, now, renderSlot, t }) {
  const statuses = sessionStatuses(node, t).filter((status) => !(node.archived && (status.state === "done" || status.state === "idle")));
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: Rows_default.hoverContent, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Rows_default.hoverTitle, children: displayTitle(node, t) }),
    cwd !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Rows_default.hoverPath, children: cwd }),
    !node.blank && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Rows_default.hoverTime, children: hoverTimeLabel(node.updatedAt, now, t) }),
    renderSlot("sidebar.session.row.hover", { sessionId: node.id }),
    statuses.map((status) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: Rows_default.hoverStatus, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.StateDot, { state: status.state }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: status.label })
    ] }, status.label)),
    node.archived && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: clsx_default(Rows_default.hoverStatus, Rows_default.hoverArchived), children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconArchiveOutlineRegular, { size: 14 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("row.archived") })
    ] })
  ] });
}
function SearchResultItem({
  result,
  currentId,
  onOpen,
  onUnarchive,
  useSessionAccess,
  t
}) {
  const selected = result.id === currentId;
  const canUnarchive = useSessionAccess(result.id, "workspace/unarchiveSession");
  const statuses = sessionStatuses(result, t);
  const primaryStatus = statuses[0];
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: clsx_default(Rows_default.searchResultRow, selected && Rows_default.selected, result.archived && Rows_default.archived),
      role: "treeitem",
      "aria-selected": selected,
      "aria-description": result.archived ? t("toast.archivedNotOpenable") : void 0,
      onClick: () => {
        onOpen(result.id);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: Rows_default.searchResultHeading, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.slot, children: !result.archived && primaryStatus.state !== "idle" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SessionStatusDots, { statuses }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.searchResultTitle, children: result.title || t("session.untitled") }),
          result.archived && canUnarchive && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.rowActions, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.Tooltip, { label: t("actions.unarchive"), side: "bottom", align: "end", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: Rows_default.iconButton,
              "aria-label": t("menu.unarchiveSession"),
              onClick: (e) => {
                e.stopPropagation();
                onUnarchive(result.id);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconUnarchiveOutlineRegular, { size: 14 })
            }
          ) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: Rows_default.searchResultMeta, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.searchResultWorkspace, children: result.workspace || t("group.ungrouped") }),
          result.snippet !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.searchResultSnippet, children: result.snippet })
        ] })
      ]
    }
  );
}
function SessionNodeItem({
  node,
  currentId,
  now,
  onOpen,
  onRenameRequest,
  renderSlot,
  openSessionMenu,
  useContextMenuTarget,
  useContextMenu,
  onReveal,
  drag,
  home,
  useSessionAccess,
  t
}) {
  const { getTriggerProps } = useContextMenu();
  const row = node;
  const title = displayTitle(node, t);
  const selected = node.id === currentId;
  const statuses = sessionStatuses(node, t);
  const primaryStatus = statuses[0];
  const showStatus = primaryStatus.state !== "idle";
  const renamable = useSessionAccess(node.id, "session/rename");
  const reorderable = useSessionAccess(node.id, "workspace/insertSessionBefore");
  const draggable = drag !== void 0 && reorderable && !row.blank && !row.archived;
  const menuOpen = useContextMenuTarget((target) => target?.kind === "session" && target.value.sessionId === node.id);
  const dragPreview = (0, import_dsh_client_ui_primitives2.useRowDragPreview)(Rows_default.dragPreview, DRAG_PREVIEW_PROPERTIES);
  const rowRef = (0, import_react3.useRef)(null);
  const titleRef = (0, import_react3.useRef)(null);
  const renameArmed = (0, import_react3.useRef)(false);
  const disarmRename = (0, import_react3.useRef)(() => {
    renameArmed.current = false;
  }).current;
  const marquee = useTitleMarquee(titleRef);
  (0, import_react3.useEffect)(() => {
    if (menuOpen || rowRef.current?.matches(":hover")) marquee.enter();
    else marquee.leave();
  }, [menuOpen, marquee]);
  (0, import_react3.useEffect)(() => {
    if (onReveal === void 0) return;
    rowRef.current?.scrollIntoView({ block: "nearest" });
    onReveal();
  }, [onReveal]);
  const ownRow = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      ref: rowRef,
      "data-row-key": `session:${node.id}`,
      className: clsx_default(
        Rows_default.sessionRow,
        selected && Rows_default.selected,
        menuOpen && Rows_default.menuOpen,
        row.archived && Rows_default.archived,
        drag?.marker === "before" && Rows_default.dropBefore,
        drag?.marker === "after" && Rows_default.dropAfter
      ),
      role: "treeitem",
      "aria-selected": selected,
      "aria-description": row.archived ? t("toast.archivedNotOpenable") : void 0,
      tabIndex: 0,
      onClick: () => {
        onOpen(node.id);
      },
      ...getTriggerProps(row.blank ? void 0 : { kind: "session", value: { sessionId: node.id, displayTitle: row.title } }, { onKeyDown: (event) => {
        if (event.target !== event.currentTarget || event.key !== "Enter" && event.key !== " ") return;
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
        event.preventDefault();
        onOpen(node.id);
      } }),
      onPointerEnter: marquee.enter,
      onPointerLeave: () => {
        if (!menuOpen) marquee.leave();
      },
      draggable,
      onDragStart: !draggable ? void 0 : (e) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", node.id);
        drag.start();
        dragPreview.start(e);
      },
      onDragEnd: () => {
        if (dragPreview.clear()) drag?.end();
      },
      onDragOver: drag === void 0 ? void 0 : (e) => {
        if (!drag.active) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        drag.hover(rowHalf(e));
      },
      onDrop: drag === void 0 ? void 0 : (e) => {
        if (!drag.active) return;
        e.preventDefault();
        drag.drop(rowHalf(e));
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.slot, children: !row.archived && !row.blank && (showStatus ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SessionStatusDots, { statuses }) : renderSlot("sidebar.session.row.leading", { sessionId: node.id })) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "span",
          {
            ref: titleRef,
            className: Rows_default.title,
            onMouseDown: (e) => {
              if (e.detail !== 1) return;
              renameArmed.current = true;
              window.addEventListener("blur", disarmRename, { once: true });
            },
            onDoubleClick: row.blank || !renamable ? void 0 : (e) => {
              e.stopPropagation();
              if (!renameArmed.current) return;
              renameArmed.current = false;
              onRenameRequest(node.id, row.title);
            },
            children: title
          }
        ),
        !row.blank && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: Rows_default.rowResting, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "span",
            {
              className: clsx_default(Rows_default.time, primaryStatus.trailingLabel === void 0 && Rows_default.timestamp),
              "aria-hidden": primaryStatus.trailingLabel === void 0 ? void 0 : true,
              children: primaryStatus.trailingLabel ?? timeLabel(row.updatedAt, now, t)
            }
          ),
          renderSlot("sidebar.session.row.trailing", { sessionId: node.id }),
          row.pinned && !row.archived && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PinnedIndicator, { t })
        ] }),
        !row.blank && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: Rows_default.rowActions, onClick: (e) => {
          e.stopPropagation();
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: Rows_default.iconButton,
              "aria-label": t("actions.session.aria", { name: title }),
              onPointerDown: (event) => {
                event.stopPropagation();
              },
              "data-context-menu-trigger": "",
              onClick: (event) => {
                event.currentTarget.focus({ preventScroll: true });
                const rect = event.currentTarget.getBoundingClientRect();
                openSessionMenu(node.id, row.title, { x: rect.left, y: rect.bottom }, "toggle");
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconEllipsisOutlineRegular, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: Rows_default.rowQuickActions, children: renderSlot("sidebar.workspaces.session.row.action", { sessionId: node.id, displayTitle: row.title }) })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_dsh_client_ui_primitives2.HoverCard,
    {
      anchor: ownRow,
      content: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        SessionHoverContent,
        {
          node,
          cwd: row.cwd === void 0 ? void 0 : abbreviateHomePath(row.cwd, home),
          now,
          renderSlot,
          t
        }
      ),
      openDelayMs: 800,
      grouped: true,
      disabled: menuOpen || drag?.active === true,
      copyText: row.blank || row.title === "" ? void 0 : row.title,
      copyLabel: t("copy"),
      copiedLabel: t("hover.copied")
    }
  );
}

// packages/lab-sidebar/src/client/plugin/client/WorkspacePicker.tsx
var import_react4 = require("react");
var import_dsh_client_ui_primitives3 = require("@deepseek-ai/dsh-client-ui-primitives");

// packages/lab-sidebar/src/client/plugin/client/path-suffix.ts
function distinguishingPathSuffixes(workspaces) {
  const rows = workspaces.map((workspace) => ({ ...workspace, parts: workspace.path.split(/([\\/])/) }));
  const suffix = (parts, count) => parts.slice(-(2 * count - 1)).join("");
  const suffixes = /* @__PURE__ */ new Map();
  for (const row of rows) {
    const peers = rows.filter((other) => other !== row && other.title === row.title);
    if (peers.length === 0) continue;
    let count = 1;
    while (2 * count - 1 < row.parts.length && (suffix(row.parts, count) === "" || peers.some((peer) => suffix(peer.parts, count) === suffix(row.parts, count)))) count++;
    suffixes.set(row.id, suffix(row.parts, count));
  }
  return suffixes;
}

// packages/lab-sidebar/src/client/plugin/client/WorkspacePicker.module.css
var WorkspacePicker_default = { "modalAction": "WorkspacePicker_modalAction", "modalError": "WorkspacePicker_modalError", "menuStatus": "WorkspacePicker_menuStatus", "pathSuffix": "WorkspacePicker_pathSuffix", "disambiguated": "WorkspacePicker_disambiguated", "title": "WorkspacePicker_title" };

// packages/lab-sidebar/src/client/plugin/client/WorkspacePicker.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var ADD_WORKSPACE = "::add-workspace";
function WorkspacePickFlow({
  t,
  open,
  anchorRef,
  useWorkspaces,
  createWorkspace,
  useDirectoryFlow,
  renderDirectoryFlow,
  onPick,
  onClose,
  addOnly = false,
  onBusyChange,
  side = "bottom",
  selectedId
}) {
  const workspaceSnapshot = useWorkspaces((state) => state);
  const workspaces = workspaceSnapshot.items;
  const getAnchorRect = (0, import_react4.useCallback)(
    () => anchorRef?.current?.getBoundingClientRect() ?? null,
    [anchorRef]
  );
  const [errorOpen, setErrorOpen] = (0, import_react4.useState)(false);
  const [modalError, setModalError] = (0, import_react4.useState)(null);
  const [flowOpen, setFlowOpen] = (0, import_react4.useState)(false);
  const [pickingFolder, setPickingFolder] = (0, import_react4.useState)(false);
  const flowBusy = flowOpen || pickingFolder;
  (0, import_react4.useEffect)(() => {
    onBusyChange?.(flowBusy);
  }, [flowBusy, onBusyChange]);
  const flowAvailable = useDirectoryFlow((occupied) => occupied);
  (0, import_react4.useEffect)(() => {
    if (flowOpen && !flowAvailable) setFlowOpen(false);
  }, [flowOpen, flowAvailable]);
  const addEntries = flowAvailable ? [{ id: ADD_WORKSPACE, label: t("menu.addWorkspace"), icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives3.IconPlusOutlineRegular, { size: 16 }), disabled: flowBusy }] : [];
  const pinAdd = !addOnly && workspaces.length > 0;
  const defaultWorkspaceName = t("workspace.defaultName");
  const listed = (0, import_react4.useMemo)(() => {
    if (!pinAdd) return [];
    const rows = workspaces.map((workspace) => ({
      id: workspace.workspaceId,
      title: workspaceDisplayTitle(workspace.title, defaultWorkspaceName),
      path: workspace.path
    }));
    const suffixes = distinguishingPathSuffixes(rows);
    return rows.map((row) => ({ ...row, suffix: suffixes.get(row.id) }));
  }, [pinAdd, workspaces, defaultWorkspaceName]);
  const items = pinAdd ? listed.map(({ id, title, path, suffix }) => ({
    id,
    // The title gives way first, so the suffix that tells the rows apart
    // stays visible; the native tooltip carries the full path.
    label: suffix === void 0 ? title : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: WorkspacePicker_default.disambiguated, title: path, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: WorkspacePicker_default.title, children: title }),
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: WorkspacePicker_default.pathSuffix, children: suffix })
    ] }),
    icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives3.IconFolderCloseRegular, { size: 16 }),
    disabled: flowBusy
  })) : addEntries;
  const menuIsEmpty = items.length === 0;
  const closeModal = () => {
    setErrorOpen(false);
    setModalError(null);
  };
  const adoptDirectory = (path) => createWorkspace({ path }).then((workspace) => {
    setFlowOpen(false);
    onPick(workspace.workspaceId);
  }).catch((reason) => {
    setModalError(reason instanceof Error ? reason.message : String(reason));
    setFlowOpen(false);
    setErrorOpen(true);
  });
  const openDirectoryFlow = (0, import_react4.useCallback)(() => {
    onClose();
    setErrorOpen(false);
    setModalError(null);
    setFlowOpen(true);
  }, [onClose]);
  const listSettled = addOnly || workspaceSnapshot.phase === "ready";
  const addIsTheOnlyEntry = !pinAdd && listSettled && addEntries.length === 1;
  (0, import_react4.useEffect)(() => {
    if (open && addIsTheOnlyEntry && !flowBusy) openDirectoryFlow();
  }, [open, addIsTheOnlyEntry, flowBusy, openDirectoryFlow]);
  const flowOwner = {
    open: flowOpen,
    busy: pickingFolder,
    onPicked: (path) => {
      setPickingFolder(true);
      void adoptDirectory(path).finally(() => {
        setPickingFolder(false);
      });
    },
    onCancel: () => {
      setFlowOpen(false);
    },
    onError: (message) => {
      setFlowOpen(false);
      setModalError(message);
      setErrorOpen(true);
    }
  };
  const handleSelect = (id) => {
    if (id === ADD_WORKSPACE) {
      openDirectoryFlow();
      return;
    }
    onPick(id);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_dsh_client_ui_primitives3.Menu,
      {
        open: open && !addIsTheOnlyEntry && !menuIsEmpty,
        anchor: null,
        items,
        ...pinAdd ? { footer: addEntries } : {},
        selectedId,
        onSelect: handleSelect,
        onClose,
        side,
        portal: true,
        getAnchorRect
      }
    ),
    open && !addIsTheOnlyEntry && !menuIsEmpty && workspaceSnapshot.phase === "pending" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: WorkspacePicker_default.menuStatus, role: "status", children: t("picker.loading") }),
    renderDirectoryFlow(flowOwner),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_dsh_client_ui_primitives3.Modal,
      {
        open: errorOpen,
        onClose: closeModal,
        closeLabel: t("close"),
        title: t("folderError.title"),
        footer: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives3.Button, { variant: "outline", className: WorkspacePicker_default.modalAction, onClick: closeModal, children: t("cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives3.Button, { variant: "primary", className: WorkspacePicker_default.modalAction, disabled: !flowAvailable, onClick: openDirectoryFlow, children: t("folderError.retry") })
        ] }),
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: WorkspacePicker_default.modalError, role: "alert", children: modalError })
      }
    )
  ] });
}
function WorkspacePicker({
  open,
  anchorRef,
  useWorkspaces,
  selectedId,
  onPick,
  onClose,
  createWorkspace,
  useDirectoryFlow,
  renderSlot,
  t
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    WorkspacePickFlow,
    {
      t,
      open,
      anchorRef,
      useWorkspaces,
      createWorkspace,
      useDirectoryFlow,
      renderDirectoryFlow: (owner) => renderSlot("conversation.hero.workspace.directoryFlow", owner),
      selectedId,
      onPick,
      onClose
    }
  );
}

// packages/lab-sidebar/src/client/plugin/client/rows/WorkspaceBrowser.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var EXPAND_SLIDE_MS = 300;
var SEARCH_DEBOUNCE_MS = 250;
var SEARCH_QUERY_MAX_CODE_UNITS = 500;
var SESSION_WATERMARK_BASE = 5;
var SESSION_WATERMARK_AUTO_MAX = 50;
function watermarkRows(sessions, watermark) {
  let count = 0;
  const rows = sessions.filter((session) => {
    if (session.blank) return true;
    count += 1;
    return count <= watermark;
  });
  return { rows, hiddenCount: sessions.length - rows.length };
}
function requiredWatermark(sessions, current, revealSessionId) {
  let index = 0;
  let required = 0;
  for (const session of sessions) {
    if (session.blank) continue;
    index += 1;
    const attention = index <= SESSION_WATERMARK_AUTO_MAX && (session.running || session.runningSubagentCount > 0 || session.pendingInteraction !== void 0 || session.completed || session.id === current);
    if (attention || session.id === revealSessionId) required = index;
  }
  return required;
}
function raiseWatermarks(marks, required) {
  let raised = marks;
  for (const [key, watermark] of required) {
    if (watermark > (raised[key] ?? SESSION_WATERMARK_BASE)) raised = { ...raised, [key]: watermark };
  }
  return raised;
}
function sanitizeSearchQuery(value) {
  const withoutNul = value.replaceAll("\0", "");
  if (withoutNul.length <= SEARCH_QUERY_MAX_CODE_UNITS) return withoutNul;
  let end = SEARCH_QUERY_MAX_CODE_UNITS;
  const last = withoutNul.charCodeAt(end - 1);
  const next = withoutNul.charCodeAt(end);
  if (last >= 55296 && last <= 56319 && next >= 56320 && next <= 57343) end--;
  return withoutNul.slice(0, end);
}
function useNativeDragAcceptance(active) {
  (0, import_react5.useEffect)(() => {
    if (!active) return;
    const acceptDrag = (event) => {
      event.preventDefault();
      if (event.dataTransfer !== null) event.dataTransfer.dropEffect = "move";
    };
    const acceptDrop = (event) => {
      event.preventDefault();
    };
    document.addEventListener("dragover", acceptDrag);
    document.addEventListener("drop", acceptDrop);
    return () => {
      document.removeEventListener("dragover", acceptDrag);
      document.removeEventListener("drop", acceptDrop);
    };
  }, [active]);
}
function ViewOptionsMenu({ groupBy, orderBy, archivedFilter, onGroupPick, onOrderPick, onArchivedFilterPick, t }) {
  const [open, setOpen] = (0, import_react5.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_dsh_client_ui_primitives4.Menu,
    {
      open,
      onClose: () => {
        setOpen(false);
      },
      items: [
        { type: "label", id: "group-by", text: t("groupBy.label") },
        { id: "workspace", label: t("groupBy.workspace"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconFolderCloseRegular, {}) },
        { id: "workspace-tree", label: t("groupBy.workspaceTree"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconWorkspaceTreeOutlineRegular, {}) },
        { id: "flat", label: t("groupBy.flat"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconFlatListOutlineRegular, {}) },
        { type: "separator", id: "order-by-separator" },
        { type: "label", id: "order-by", text: t("orderBy.label") },
        { id: "manual", label: t("orderBy.manual"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconChevronsUpDownOutlineRegular, {}) },
        { id: "updated", label: t("orderBy.updated"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconClockOutlineRegular, {}) },
        { type: "separator", id: "archived-filter-separator" },
        { type: "label", id: "filter-by", text: t("filterBy.label") },
        { id: "hide-archived", label: t("viewOptions.hideArchived"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconArchiveOffOutlineRegular, {}) },
        { id: "show-archived", label: t("viewOptions.showArchived"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconQueueOutlineRegular, {}) },
        { id: "only-archived", label: t("viewOptions.onlyArchived"), icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconArchiveCheckOutlineRegular, {}) }
      ],
      selectedIds: [
        groupBy,
        orderBy,
        { default: "hide-archived", show: "show-archived", only: "only-archived" }[archivedFilter]
      ],
      onSelect: (id) => {
        if (id === "workspace" || id === "workspace-tree" || id === "flat") onGroupPick(id);
        else if (id === "manual" || id === "updated") onOrderPick(id);
        else if (id === "hide-archived") onArchivedFilterPick("default");
        else if (id === "show-archived") onArchivedFilterPick("show");
        else if (id === "only-archived") onArchivedFilterPick("only");
        setOpen(false);
      },
      align: "end",
      dense: true,
      listClassName: WorkspaceBrowser_default.viewOptionsMenu,
      portal: true,
      anchor: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.Tooltip, { label: t("viewOptions.label"), side: "bottom", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "button",
        {
          type: "button",
          className: clsx_default(WorkspaceBrowser_default.iconButton, WorkspaceBrowser_default.wide),
          "aria-label": t("viewOptions.label"),
          onClick: () => {
            setOpen((v) => !v);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconSlidersTwoOutlineRegular, {})
        }
      ) })
    }
  );
}
function sessionDragOrder(order, rows, drag, over) {
  const source = rows.find((row) => row.id === drag.sessionId);
  const target = rows.find((row) => row.id === over.id);
  if (source === void 0 || target === void 0 || source.blank || source.pinned !== drag.pinned || target.pinned !== drag.pinned || source.id === target.id || !order.includes(source.id)) return;
  const section = rows.filter((row) => row.pinned === drag.pinned);
  const sourceIndex = section.findIndex((row) => row.id === source.id);
  const withoutSource = section.filter((row) => row.id !== source.id);
  const insertAt = withoutSource.findIndex((row) => row.id === target.id) + (over.half === "after" ? 1 : 0);
  if (insertAt === sourceIndex) return;
  const next = order.filter((id) => id !== source.id);
  const targetIndex = next.indexOf(target.id);
  if (targetIndex === -1) return;
  next.splice(targetIndex + (over.half === "after" ? 1 : 0), 0, source.id);
  return pinCurrentBlank(next, rows.find((row) => row.blank)?.id);
}
function workspaceGroupHalf(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  return e.clientY < rect.top + rect.height / 2 ? "before" : "after";
}
function EmptySessions({ rowState, onLeaveArchivedOnly, t }) {
  const archivedOnly = rowState.archivedFilter === "only";
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: WorkspaceBrowser_default.emptyState, "data-row-key": "empty", children: [
    archivedOnly ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconArchiveOutlineRegular, { size: 24 }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconQueueOutlineRegular, { size: 24 }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: archivedOnly ? t("empty.noneArchived") : t("empty.none") }),
    archivedOnly && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "button", className: WorkspaceBrowser_default.emptyAction, onClick: onLeaveArchivedOnly, children: t("empty.viewOthers") })
  ] });
}
function SessionTree({
  list,
  useSessionStatus,
  startSession,
  open,
  workspaces,
  ungroupedSessionIds,
  rowState,
  onLeaveArchivedOnly,
  workspaceReady,
  animationResetKey,
  usePanelInfo,
  useRemoteAccess,
  useSessionAccess,
  useWorkspaceAccess,
  onSessionRenameRequest,
  renderSlot,
  openSessionMenu,
  openWorkspaceMenu,
  useContextMenuTarget,
  useContextMenu,
  insertWorkspaceBefore,
  nestWorkspaces,
  groupExpansion,
  setGroupExpanded,
  setSessionOrder,
  home,
  t,
  revealSessionId,
  onSessionRevealed,
  shortcuts
}) {
  const panelActive = usePanelInfo((info) => info.activePanelId !== null);
  const statuses = useSessionStatus((s) => s);
  const current = panelActive ? void 0 : Object.values(list.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id;
  const revealGroup = revealSessionId === void 0 || !workspaceReady ? void 0 : owningGroupKey(workspaces, revealSessionId);
  const [storedWatermarks, setStoredWatermarks] = (0, import_react5.useState)({});
  const [watermarkMotionKey, setWatermarkMotionKey] = (0, import_react5.useState)(0);
  const [drag, setDrag] = (0, import_react5.useState)(null);
  const sessionDropCommitted = (0, import_react5.useRef)(false);
  const [workspaceDrag, setWorkspaceDrag] = (0, import_react5.useState)(null);
  const workspaceDropCommitted = (0, import_react5.useRef)(false);
  const nativeDragActive = drag !== null || workspaceDrag !== null;
  useNativeDragAcceptance(nativeDragActive);
  const currentGroup = current === void 0 || !workspaceReady ? void 0 : owningGroupKey(workspaces, current);
  (0, import_react5.useEffect)(() => {
    if (current === void 0 || currentGroup === void 0 || Object.hasOwn(groupExpansion, currentGroup)) return;
    setGroupExpanded(currentGroup, true);
  }, [current, currentGroup, setGroupExpanded, groupExpansion]);
  const parents = (0, import_react5.useMemo)(() => {
    if (!nestWorkspaces) return /* @__PURE__ */ new Map();
    const keysByPath = new Map(workspaces.map((workspace) => [workspace.path, workspace.workspaceId]));
    const paths = [...keysByPath.keys()];
    return new Map(workspaces.map((workspace) => {
      const path = owningParentFolder(workspace.path, paths);
      return [workspace.workspaceId, path === void 0 ? void 0 : keysByPath.get(path)];
    }));
  }, [nestWorkspaces, workspaces]);
  const currentAncestors = (0, import_react5.useMemo)(() => {
    const keys = /* @__PURE__ */ new Set();
    for (let key = currentGroup === void 0 ? void 0 : parents.get(currentGroup); key !== void 0; key = parents.get(key)) {
      keys.add(key);
    }
    return keys;
  }, [currentGroup, parents]);
  const expandedGroups = (0, import_react5.useMemo)(() => {
    const ancestorKeys = new Set(parents.values());
    return [...workspaces.map((workspace) => workspace.workspaceId), UNGROUPED_KEY].filter((key) => groupExpansion[key] ?? ancestorKeys.has(key));
  }, [groupExpansion, parents, workspaces]);
  const groups = (0, import_react5.useMemo)(
    () => deriveGroups(list, workspaces, rowState, statuses, {
      expandedGroups,
      ungroupedOrder: ungroupedSessionIds
    }),
    [list, workspaces, rowState, statuses, expandedGroups, ungroupedSessionIds]
  );
  (0, import_react5.useEffect)(() => {
    for (let key = revealGroup; key !== void 0; key = parents.get(key)) {
      if (groupExpansion[key] === false || key === revealGroup && groupExpansion[key] !== true) {
        setGroupExpanded(key, true);
      }
    }
  }, [groupExpansion, parents, revealGroup, setGroupExpanded]);
  const baselines = new Map(groups.map((group) => [group.key, Math.max(SESSION_WATERMARK_BASE, requiredWatermark(
    group.sessions,
    current,
    group.key === revealGroup ? revealSessionId : void 0
  ))]));
  const foldedKeys = new Set(groups.filter((group) => !group.expanded).map((group) => group.key));
  const underFoldedAncestor = (key) => {
    for (let owner = parents.get(key); owner !== void 0; owner = parents.get(owner)) {
      if (foldedKeys.has(owner)) return true;
    }
    return false;
  };
  const requiredWatermarks = new Map([...baselines].filter(([key]) => !underFoldedAncestor(key)));
  const sessionWatermarks = raiseWatermarks(storedWatermarks, requiredWatermarks);
  if (sessionWatermarks !== storedWatermarks) setStoredWatermarks((marks) => raiseWatermarks(marks, requiredWatermarks));
  const dropWatermarks = (drop) => {
    if (!Object.keys(storedWatermarks).some(drop)) return;
    setStoredWatermarks((marks) => Object.fromEntries(Object.entries(marks).filter(([key]) => !drop(key))));
    setWatermarkMotionKey((key) => key + 1);
  };
  const withinGroup = (key, root) => {
    for (let owner = key; owner !== void 0; owner = parents.get(owner)) {
      if (owner === root) return true;
    }
    return false;
  };
  const now = Date.now();
  const commitSessionDrag = (activeDrag, over) => {
    if (sessionDropCommitted.current) return;
    sessionDropCommitted.current = true;
    setDrag(null);
    const group = groups.find((candidate) => candidate.key === activeDrag.accountKey);
    if (group === void 0) return;
    if (over.id === activeDrag.sessionId) return;
    const accountSessionIds = activeDrag.accountKey === UNGROUPED_KEY ? ungroupedSessionIds : workspaces.find((workspace) => workspace.workspaceId === activeDrag.accountKey)?.sessionIds;
    if (accountSessionIds === void 0) return;
    const renderedSessions = watermarkRows(group.sessions, sessionWatermarks[group.key] ?? SESSION_WATERMARK_BASE).rows;
    const nextOrder = sessionDragOrder(accountSessionIds, renderedSessions, activeDrag, over);
    if (nextOrder !== void 0) setSessionOrder(activeDrag.accountKey, nextOrder);
  };
  const commitWorkspaceDrag = (activeDrag, over) => {
    if (workspaceDropCommitted.current) return;
    workspaceDropCommitted.current = true;
    setWorkspaceDrag(null);
    const owner = parents.get(activeDrag.workspaceId);
    const siblings = workspaces.filter((workspace) => parents.get(workspace.workspaceId) === owner);
    const rowIndex = siblings.findIndex((workspace) => workspace.workspaceId === over.id);
    if (rowIndex === -1) return;
    const anchor = over.half === "before" ? over.id : siblings[rowIndex + 1]?.workspaceId;
    if (anchor === activeDrag.workspaceId) return;
    const sourceIndex = siblings.findIndex((workspace) => workspace.workspaceId === activeDrag.workspaceId);
    const anchorIndex = anchor === void 0 ? siblings.length : siblings.findIndex((workspace) => workspace.workspaceId === anchor);
    if (sourceIndex !== -1 && (anchorIndex === sourceIndex || anchorIndex === sourceIndex + 1)) return;
    insertWorkspaceBefore(activeDrag.workspaceId, anchor).catch((reason) => {
      console.warn("workspace reorder rejected:", reason);
    });
  };
  const childrenByParent = (0, import_react5.useMemo)(() => {
    const rendered = new Set(groups.map((group) => group.key));
    const children = /* @__PURE__ */ new Map();
    for (const group of groups) {
      let parent = parents.get(group.key);
      while (parent !== void 0 && !rendered.has(parent)) parent = parents.get(parent);
      const siblings = children.get(parent);
      if (siblings === void 0) children.set(parent, [group]);
      else siblings.push(group);
    }
    return children;
  }, [groups, parents]);
  const rootGroups = childrenByParent.get(void 0) ?? [];
  const workspaceDropAtListStart = rootGroups[0]?.workspaceId !== void 0 && workspaceDrag?.over?.id === rootGroups[0].workspaceId && workspaceDrag.over.half === "before";
  const rowKeys = groups.length === 0 ? ["empty"] : [];
  const renderGroup = (group, depth) => {
    const workspaceId = group.workspaceId;
    const children = childrenByParent.get(group.key) ?? [];
    const compatibleDrag = workspaceDrag !== null && parents.get(workspaceDrag.workspaceId) === parents.get(group.key);
    const watermark = sessionWatermarks[group.key] ?? SESSION_WATERMARK_BASE;
    const collapsed = watermarkRows(group.sessions, baselines.get(group.key) ?? SESSION_WATERMARK_BASE);
    const visible = watermarkRows(group.sessions, watermark);
    const sessionsExpanded = visible.hiddenCount === 0;
    rowKeys.push(`workspace:${group.key}`);
    const childRows = group.expanded ? children.map((child) => renderGroup(child, depth + 1)) : [];
    const sessions = visible.rows;
    for (const node of sessions) rowKeys.push(`session:${node.id}`);
    if (collapsed.hiddenCount > 0) rowKeys.push(`overflow:${group.key}`);
    const workspaceMarker = workspaceId !== void 0 && workspaceDrag?.over?.id === workspaceId ? workspaceDrag.over.half : null;
    const workspaceDragProps = workspaceId === void 0 ? void 0 : {
      start: () => {
        workspaceDropCommitted.current = false;
        setWorkspaceDrag({ workspaceId, over: null });
      },
      end: () => {
        if (workspaceDrag?.over !== null && workspaceDrag?.over !== void 0) {
          commitWorkspaceDrag(workspaceDrag, workspaceDrag.over);
        } else {
          setWorkspaceDrag(null);
        }
        workspaceDropCommitted.current = false;
      }
    };
    const hoverWorkspace = workspaceId === void 0 || !compatibleDrag ? void 0 : (half) => {
      setWorkspaceDrag((active) => active === null ? active : { ...active, over: { id: workspaceId, half } });
    };
    const dropWorkspace = workspaceId === void 0 || !compatibleDrag ? void 0 : (half) => {
      commitWorkspaceDrag(workspaceDrag, { id: workspaceId, half });
    };
    return (
      // Group section: header, descendant Workspaces, and own Session rows. The
      // inter-group breathing room is the section's own margin
      // (WorkspaceBrowser.module.css).
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "div",
        {
          style: { "--dsh-workspace-indent": `${depth * 12}px` },
          className: clsx_default(
            WorkspaceBrowser_default.groupSection,
            workspaceMarker === "before" && WorkspaceBrowser_default.workspaceDropBefore,
            workspaceMarker === "after" && WorkspaceBrowser_default.workspaceDropAfter
          ),
          onDragOver: workspaceDrag === null ? void 0 : (e) => {
            e.preventDefault();
            if (hoverWorkspace === void 0 && parents.get(group.key) !== void 0) return;
            e.stopPropagation();
            if (hoverWorkspace === void 0) {
              e.dataTransfer.dropEffect = "none";
              if (workspaceDrag.over !== null) setWorkspaceDrag({ ...workspaceDrag, over: null });
            } else {
              e.dataTransfer.dropEffect = "move";
              hoverWorkspace(workspaceGroupHalf(e));
            }
          },
          onDrop: workspaceDrag === null ? void 0 : (e) => {
            e.preventDefault();
            if (dropWorkspace === void 0 && parents.get(group.key) !== void 0) return;
            e.stopPropagation();
            if (dropWorkspace === void 0) {
              workspaceDropCommitted.current = true;
              setWorkspaceDrag(null);
            } else {
              dropWorkspace(workspaceGroupHalf(e));
            }
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              ProjectRowItem,
              {
                newShortcut: shortcuts.find((row) => row.id === "session.new"),
                group,
                openWorkspaceMenu,
                useContextMenu,
                useContextMenuTarget,
                useRemoteAccess,
                useWorkspaceAccess,
                containsCurrentDescendant: currentAncestors.has(group.key),
                home,
                t,
                onToggle: () => {
                  if (group.expanded) dropWatermarks((key) => withinGroup(key, group.key));
                  setGroupExpanded(group.key, !group.expanded);
                },
                onCreate: () => {
                  if (group.workspaceId !== void 0) {
                    setGroupExpanded(group.key, true);
                    startSession(group.workspaceId);
                  }
                },
                drag: workspaceDragProps
              }
            ),
            childRows.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { role: "group", children: childRows }),
            sessions.map((node) => {
              const sameGroupDrag = drag !== null && drag.accountKey === group.key;
              const compatibleTarget = sameGroupDrag && drag.pinned === node.pinned;
              const normalizeHalf = (half) => node.blank ? "after" : half;
              const dragProps = {
                start: () => {
                  sessionDropCommitted.current = false;
                  setDrag({ accountKey: group.key, sessionId: node.id, pinned: node.pinned, over: null });
                },
                active: compatibleTarget,
                marker: sameGroupDrag && drag.over?.id === node.id ? drag.over.half : null,
                hover: (half) => {
                  setDrag((d) => d === null ? d : {
                    ...d,
                    over: { id: node.id, half: normalizeHalf(half) }
                  });
                },
                drop: (half) => {
                  if (drag === null) return;
                  commitSessionDrag(drag, { id: node.id, half: normalizeHalf(half) });
                },
                end: () => {
                  if (drag?.over !== null && drag?.over !== void 0) commitSessionDrag(drag, drag.over);
                  else setDrag(null);
                  sessionDropCommitted.current = false;
                }
              };
              return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                SessionNodeItem,
                {
                  node,
                  currentId: current,
                  now,
                  onOpen: open,
                  onRenameRequest: onSessionRenameRequest,
                  renderSlot,
                  openSessionMenu,
                  useContextMenu,
                  useContextMenuTarget,
                  onReveal: node.id === revealSessionId && group.key === revealGroup ? () => {
                    onSessionRevealed(node.id);
                  } : void 0,
                  drag: dragProps,
                  home,
                  useSessionAccess,
                  t
                },
                node.id
              );
            }),
            collapsed.hiddenCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "button",
              {
                type: "button",
                className: WorkspaceBrowser_default.sessionOverflowButton,
                "data-row-key": `overflow:${group.key}`,
                "aria-expanded": sessionsExpanded,
                onClick: () => {
                  if (sessionsExpanded) {
                    dropWatermarks((key) => key === group.key);
                    return;
                  }
                  setStoredWatermarks((marks) => ({
                    ...marks,
                    [group.key]: visible.hiddenCount <= SESSION_WATERMARK_BASE ? Infinity : watermark + SESSION_WATERMARK_BASE
                  }));
                  setWatermarkMotionKey((key) => key + 1);
                },
                children: sessionsExpanded ? t("sessions.collapse") : t("sessions.expand", { n: visible.hiddenCount })
              }
            )
          ]
        },
        group.key
      )
    );
  };
  const groupRows = rootGroups.map((group) => renderGroup(group, 0));
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_dsh_client_ui_primitives4.HoverCardGroup, { className: clsx_default(WorkspaceBrowser_default.treeBody, WorkspaceBrowser_default.wide), children: [
    workspaceDropAtListStart && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: WorkspaceBrowser_default.listTopDropIndicator, "aria-hidden": "true" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_dsh_client_ui_primitives4.AnimatedRows,
      {
        className: clsx_default(WorkspaceBrowser_default.list, workspaceDropAtListStart && WorkspaceBrowser_default.listTopDropActive),
        role: "tree",
        label: t("section.sessions"),
        rowKeys,
        ready: list.phase === "ready" && workspaceReady && !nativeDragActive,
        resetKey: JSON.stringify([animationResetKey, watermarkMotionKey]),
        children: [
          groups.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(EmptySessions, { rowState, onLeaveArchivedOnly, t }),
          groupRows
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: WorkspaceBrowser_default.fade })
  ] });
}
function FlatList({
  list,
  sessionIds,
  rowState,
  onLeaveArchivedOnly,
  useSessionStatus,
  useSessionAccess,
  open,
  onSessionRenameRequest,
  usePanelInfo,
  setSessionOrder,
  workspaceReady,
  animationResetKey,
  revealSessionId,
  onSessionRevealed,
  renderSlot,
  openSessionMenu,
  useContextMenuTarget,
  useContextMenu,
  home,
  t
}) {
  const panelActive = usePanelInfo((info) => info.activePanelId !== null);
  const statuses = useSessionStatus((s) => s);
  const rows = (0, import_react5.useMemo)(
    () => deriveFlat(list, sessionIds, rowState, statuses),
    [list, sessionIds, rowState, statuses]
  );
  const [drag, setDrag] = (0, import_react5.useState)(null);
  const dropCommitted = (0, import_react5.useRef)(false);
  useNativeDragAcceptance(drag !== null);
  const currentId = panelActive ? void 0 : Object.values(list.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id;
  const commitDrag = (activeDrag, over) => {
    if (dropCommitted.current) return;
    dropCommitted.current = true;
    setDrag(null);
    const nextOrder = sessionDragOrder(sessionIds, rows, activeDrag, over);
    if (nextOrder !== void 0) setSessionOrder(FLAT_SESSION_ORDER_KEY, nextOrder);
  };
  const now = Date.now();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_dsh_client_ui_primitives4.HoverCardGroup, { className: clsx_default(WorkspaceBrowser_default.treeBody, WorkspaceBrowser_default.wide), children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_dsh_client_ui_primitives4.AnimatedRows,
      {
        className: clsx_default(WorkspaceBrowser_default.list, WorkspaceBrowser_default.flatList),
        role: "tree",
        label: t("section.sessions"),
        rowKeys: rows.length === 0 ? ["empty"] : rows.map((row) => `session:${row.id}`),
        ready: list.phase === "ready" && workspaceReady && drag === null,
        resetKey: animationResetKey,
        children: [
          rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(EmptySessions, { rowState, onLeaveArchivedOnly, t }),
          rows.map((node) => {
            const active = drag !== null && drag.pinned === node.pinned;
            const normalizeHalf = (half) => node.blank ? "after" : half;
            return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              SessionNodeItem,
              {
                node,
                currentId,
                now,
                onOpen: open,
                onRenameRequest: onSessionRenameRequest,
                renderSlot,
                openSessionMenu,
                useContextMenu,
                useContextMenuTarget,
                onReveal: node.id === revealSessionId ? () => {
                  onSessionRevealed(node.id);
                } : void 0,
                useSessionAccess,
                drag: {
                  start: () => {
                    dropCommitted.current = false;
                    setDrag({ accountKey: FLAT_SESSION_ORDER_KEY, sessionId: node.id, pinned: node.pinned, over: null });
                  },
                  active,
                  marker: active && drag.over?.id === node.id ? drag.over.half : null,
                  hover: (half) => {
                    setDrag((current) => current === null ? current : {
                      ...current,
                      over: { id: node.id, half: normalizeHalf(half) }
                    });
                  },
                  drop: (half) => {
                    if (drag !== null) commitDrag(drag, { id: node.id, half: normalizeHalf(half) });
                  },
                  end: () => {
                    if (drag?.over !== null && drag?.over !== void 0) commitDrag(drag, drag.over);
                    else setDrag(null);
                    dropCommitted.current = false;
                  }
                },
                home,
                t
              },
              node.id
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: WorkspaceBrowser_default.fade })
  ] });
}
function SearchResults({
  useSessions,
  useSessionStatus,
  open,
  onUnarchive,
  workspaces,
  archivedSessionIds,
  archivedFilter,
  query,
  remote,
  resultLimit,
  usePanelInfo,
  useSessionAccess,
  t
}) {
  const panelActive = usePanelInfo((info) => info.activePanelId !== null);
  const list = useSessions((s) => s);
  const statuses = useSessionStatus((s) => s);
  const currentRemote = remote.query === query ? remote : { query, status: "loading", items: [], hasMore: false };
  const results = (0, import_react5.useMemo)(
    () => deriveSearchResults(
      list,
      workspaces,
      query,
      archivedSessionIds,
      archivedFilter,
      statuses,
      currentRemote,
      resultLimit
    ),
    [list, workspaces, query, archivedSessionIds, archivedFilter, statuses, currentRemote, resultLimit]
  );
  const pending = currentRemote.status === "loading";
  const currentId = panelActive ? void 0 : Object.values(list.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: clsx_default(WorkspaceBrowser_default.treeBody, WorkspaceBrowser_default.wide), children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: WorkspaceBrowser_default.list, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: WorkspaceBrowser_default.searchTree, role: "tree", "aria-label": t("search.results.aria"), children: results.items.map((result) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        SearchResultItem,
        {
          result,
          currentId,
          onOpen: open,
          onUnarchive,
          useSessionAccess,
          t
        },
        result.id
      )) }),
      pending && /* Two skeleton rows on an empty list, one when local matches already
         show and only the content hits are outstanding. */
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { role: "status", "aria-label": t("search.pending"), children: (results.items.length === 0 ? [0, 1] : [0]).map((i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: WorkspaceBrowser_default.skeletonRow, "aria-hidden": "true", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: WorkspaceBrowser_default.skeletonDot }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: WorkspaceBrowser_default.skeletonBars, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: WorkspaceBrowser_default.skeletonBar }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: clsx_default(WorkspaceBrowser_default.skeletonBar, WorkspaceBrowser_default.skeletonBarWide) })
        ] })
      ] }, i)) }),
      !pending && results.items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: WorkspaceBrowser_default.empty, children: t("search.noMatches") }),
      results.hasMore && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: WorkspaceBrowser_default.searchStatus, children: t("search.hasMore", { n: resultLimit }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: WorkspaceBrowser_default.fade })
  ] });
}
function WorkspaceBrowser({
  wide,
  usePanelInfo,
  expandSidebar,
  useSessions,
  useSessionStatus,
  useRemoteAccess,
  useSessionAccess,
  useWorkspaceAccess,
  useWorkspaces,
  useStore,
  actions,
  startSession,
  open,
  requestSessionRename,
  notifyArchivedNotOpenable,
  renameWorkspace,
  useWorkspaceActionRequest,
  settleWorkspaceAction,
  deleteWorkspace,
  insertWorkspaceBefore,
  unarchiveSession,
  createWorkspace,
  searchSessions,
  searchResultLimit,
  useDirectoryFlow,
  useHostInfo,
  useShortcuts,
  useWorkspaceShortcuts,
  requestSearch,
  requestAddWorkspace,
  closeAddWorkspace,
  setDirectoryBusy,
  renderSlot,
  openSessionMenu,
  openWorkspaceMenu,
  useContextMenuTarget,
  useContextMenu,
  t
}) {
  const home = useHostInfo((info) => info.home);
  const shortcuts = useShortcuts((rows) => rows);
  const searchShortcut = shortcuts.find((row) => row.id === "session.search");
  const addShortcut = shortcuts.find((row) => row.id === "workspace.add");
  const shortcutState = useWorkspaceShortcuts((state) => state);
  const list = useSessions((state) => state);
  const storedWorkspaces = useWorkspaces((state) => state.items);
  const defaultWorkspaceName = t("workspace.defaultName");
  const workspaces = (0, import_react5.useMemo)(
    () => storedWorkspaces.map((workspace) => ({
      ...workspace,
      title: workspaceDisplayTitle(workspace.title, defaultWorkspaceName)
    })),
    [storedWorkspaces, defaultWorkspaceName]
  );
  const workspacePhase = useWorkspaces((state) => state.phase);
  const workspaceStreamState = useWorkspaces((state) => state.state);
  const archivedSessionIds = useWorkspaces((state) => state.archivedSessionIds);
  const pinnedSessionIds = useWorkspaces((state) => state.pinnedSessionIds);
  const directoryFlowAvailable = useDirectoryFlow((occupied) => occupied);
  const groupBy = useStore((s) => s.groupBy);
  const orderBy = useStore((s) => s.orderBy);
  const archivedFilter = useStore((s) => s.archivedFilter ?? "default");
  const groupExpansion = useStore((s) => s.groupExpansion);
  const sessionOrderByAccount = useStore((s) => s.sessionOrderByAccount);
  const guardedOpen = (sessionId) => {
    if (archivedSessionIds.includes(sessionId)) {
      notifyArchivedNotOpenable();
      return;
    }
    open(sessionId);
  };
  const leaveArchivedOnly = () => {
    actions.setArchivedFilter("default");
  };
  const workspaceReady = workspacePhase === "ready" && workspaceStreamState !== "loading";
  const mainSessionId2 = Object.values(list.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id;
  const currentBlank = mainSessionId2 !== void 0 && list.byId[mainSessionId2]?.blank === true ? mainSessionId2 : void 0;
  const ungroupedMemberIds = (0, import_react5.useMemo)(() => {
    const accounted = new Set(workspaces.flatMap((workspace) => workspace.sessionIds));
    return list.ids.filter((id) => list.byId[id] !== void 0 && !accounted.has(id));
  }, [list, workspaces]);
  const orderState = (0, import_react5.useMemo)(
    () => ({ pinnedSessionIds, archivedSessionIds }),
    [archivedSessionIds, pinnedSessionIds]
  );
  const rowState = (0, import_react5.useMemo)(
    () => ({ ...orderState, archivedFilter }),
    [orderState, archivedFilter]
  );
  const flatMemberIds = (0, import_react5.useMemo)(() => sessionMemberIds(list), [list]);
  const orderedWorkspaces = (0, import_react5.useMemo)(() => workspaces.map((workspace) => {
    const memberIds = workspace.sessionIds;
    const baseOrder = orderBy === "updated" ? orderByRecency(memberIds, list.byId) : reconcileManualOrder(memberIds, sessionOrderByAccount[workspace.workspaceId], list.byId, orderState);
    return {
      ...workspace,
      sessionIds: pinCurrentBlank(
        baseOrder,
        currentBlank !== void 0 && memberIds.includes(currentBlank) ? currentBlank : void 0
      )
    };
  }), [currentBlank, list.byId, orderBy, orderState, sessionOrderByAccount, workspaces]);
  const orderedUngroupedSessionIds = (0, import_react5.useMemo)(() => {
    const baseOrder = orderBy === "updated" ? orderByRecency(ungroupedMemberIds, list.byId) : reconcileManualOrder(ungroupedMemberIds, sessionOrderByAccount[UNGROUPED_KEY], list.byId, orderState);
    return pinCurrentBlank(
      baseOrder,
      currentBlank !== void 0 && ungroupedMemberIds.includes(currentBlank) ? currentBlank : void 0
    );
  }, [currentBlank, list.byId, orderBy, orderState, sessionOrderByAccount, ungroupedMemberIds]);
  const orderedFlatSessionIds = (0, import_react5.useMemo)(() => {
    const baseOrder = orderBy === "updated" ? orderByRecency(flatMemberIds, list.byId) : reconcileManualOrder(flatMemberIds, sessionOrderByAccount[FLAT_SESSION_ORDER_KEY], list.byId, orderState);
    return pinCurrentBlank(
      baseOrder,
      currentBlank !== void 0 && flatMemberIds.includes(currentBlank) ? currentBlank : void 0
    );
  }, [currentBlank, flatMemberIds, list.byId, orderBy, orderState, sessionOrderByAccount]);
  const activeSessionOrders = (0, import_react5.useMemo)(() => Object.fromEntries([
    ...orderedWorkspaces.map((workspace) => [workspace.workspaceId, workspace.sessionIds]),
    [UNGROUPED_KEY, orderedUngroupedSessionIds],
    [FLAT_SESSION_ORDER_KEY, orderedFlatSessionIds]
  ]), [orderedFlatSessionIds, orderedUngroupedSessionIds, orderedWorkspaces]);
  (0, import_react5.useEffect)(() => {
    if (workspacePhase !== "ready") return;
    actions.retainAccountKeys([
      UNGROUPED_KEY,
      FLAT_SESSION_ORDER_KEY,
      ...workspaces.map((workspace) => workspace.workspaceId)
    ]);
  }, [actions.retainAccountKeys, workspacePhase, workspaces]);
  (0, import_react5.useEffect)(() => {
    if (list.phase !== "ready" || workspaceReady || orderBy !== "manual" || currentBlank === void 0) return;
    const changed = {};
    for (const [key, ids] of Object.entries(activeSessionOrders)) {
      if (key !== FLAT_SESSION_ORDER_KEY && workspacePhase !== "ready") continue;
      const saved = sessionOrderByAccount[key] ?? [];
      if (ids[0] !== currentBlank || saved[0] === currentBlank) continue;
      changed[key] = [currentBlank, ...saved.filter((id) => id !== currentBlank)];
    }
    if (Object.keys(changed).length > 0) actions.syncSessionOrders(changed);
  }, [
    actions.syncSessionOrders,
    activeSessionOrders,
    currentBlank,
    list.phase,
    orderBy,
    sessionOrderByAccount,
    workspacePhase,
    workspaceReady
  ]);
  (0, import_react5.useEffect)(() => {
    if (list.phase !== "ready" || !workspaceReady || orderBy !== "manual" || currentBlank === void 0) return;
    const moved = Object.entries(activeSessionOrders).some(([key, ids]) => ids[0] === currentBlank && sessionOrderByAccount[key]?.[0] !== currentBlank);
    if (moved) actions.syncSessionOrders(activeSessionOrders);
  }, [
    actions.syncSessionOrders,
    activeSessionOrders,
    currentBlank,
    list.phase,
    orderBy,
    sessionOrderByAccount,
    workspaceReady
  ]);
  const saveSessionOrder = (accountKey, order) => {
    actions.setSessionOrder(accountKey, order, activeSessionOrders);
  };
  const [query, setQuery] = (0, import_react5.useState)("");
  const [searchExpanded, setSearchExpanded] = (0, import_react5.useState)(false);
  const [searchSpacingMotionEnabled, setSearchSpacingMotionEnabled] = (0, import_react5.useState)(false);
  const [searchOnExpand, setSearchOnExpand] = (0, import_react5.useState)(false);
  const [lastSearchRequest, setLastSearchRequest] = (0, import_react5.useState)(0);
  if (lastSearchRequest !== shortcutState.searchRequest) {
    setLastSearchRequest(shortcutState.searchRequest);
    if (shortcutState.searchRequest !== 0) {
      setSearchExpanded(true);
      setSearchSpacingMotionEnabled(wide);
      if (!wide) setSearchOnExpand(true);
    }
  }
  if (!wide && searchSpacingMotionEnabled) setSearchSpacingMotionEnabled(false);
  const changeSearchExpanded = (expanded) => {
    setSearchSpacingMotionEnabled(wide);
    setSearchExpanded(expanded);
  };
  const [revealSessionId, setRevealSessionId] = (0, import_react5.useState)(void 0);
  const normalizedQuery = sanitizeSearchQuery(query).trim();
  const [remoteSearch, setRemoteSearch] = (0, import_react5.useState)({
    query: "",
    status: "idle",
    items: [],
    hasMore: false
  });
  const searchRoot = (0, import_react5.useRef)(null);
  const searchInput = (0, import_react5.useRef)(null);
  const wsPickerOpen = shortcutState.addRequested;
  const wsPlusRef = (0, import_react5.useRef)(null);
  const workspaceActionRequest = useWorkspaceActionRequest((value) => value);
  const openSearchResult = (sessionId) => {
    if (archivedSessionIds.includes(sessionId)) {
      notifyArchivedNotOpenable();
      return;
    }
    setRevealSessionId(sessionId);
    setQuery("");
    changeSearchExpanded(false);
    open(sessionId);
  };
  const acknowledgeSessionReveal = (sessionId) => {
    setRevealSessionId((current) => current === sessionId ? void 0 : current);
  };
  (0, import_react5.useEffect)(() => {
    if (normalizedQuery !== "") setRevealSessionId(void 0);
  }, [normalizedQuery]);
  (0, import_react5.useEffect)(() => {
    if (wide && searchOnExpand) {
      const timer = window.setTimeout(() => {
        searchInput.current?.focus({ preventScroll: true });
        setSearchOnExpand(false);
      }, EXPAND_SLIDE_MS);
      return () => {
        window.clearTimeout(timer);
      };
    }
  }, [wide, searchOnExpand]);
  (0, import_react5.useEffect)(() => {
    if (shortcutState.searchRequest === 0) return;
    closeAddWorkspace();
    if (!wide || searchInput.current?.closest("[inert]")) {
      setSearchOnExpand(true);
      expandSidebar();
    } else searchInput.current?.focus({ preventScroll: true });
  }, [shortcutState.searchRequest]);
  (0, import_react5.useEffect)(() => {
    if (!wide || !searchExpanded || searchOnExpand) return;
    searchInput.current?.focus({ preventScroll: true });
  }, [wide, searchExpanded, searchOnExpand]);
  (0, import_react5.useEffect)(() => {
    if (!wide || !searchExpanded || searchOnExpand) return;
    const onClick = (event) => {
      if (!(event.target instanceof Node) || searchRoot.current?.contains(event.target) === true) return;
      searchInput.current?.blur();
      if (normalizedQuery !== "") return;
      changeSearchExpanded(false);
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [normalizedQuery, wide, searchExpanded, searchOnExpand]);
  (0, import_react5.useEffect)(() => {
    if (normalizedQuery === "") {
      setRemoteSearch({ query: "", status: "idle", items: [], hasMore: false });
      return;
    }
    const controller = new AbortController();
    setRemoteSearch({
      query: normalizedQuery,
      status: "loading",
      items: [],
      hasMore: false
    });
    const timer = window.setTimeout(() => {
      searchSessions(normalizedQuery, controller.signal).then((result) => {
        if (controller.signal.aborted) return;
        setRemoteSearch({
          query: normalizedQuery,
          status: "ready",
          items: result.items,
          hasMore: result.hasMore
        });
      }).catch(() => {
        if (controller.signal.aborted) return;
        setRemoteSearch({
          query: normalizedQuery,
          status: "error",
          items: [],
          hasMore: false
        });
      });
    }, SEARCH_DEBOUNCE_MS);
    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [normalizedQuery, searchSessions]);
  const onSessionUnarchive = (sessionId) => {
    unarchiveSession(sessionId).catch((reason) => {
      console.warn("session unarchive rejected:", reason);
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: clsx_default(WorkspaceBrowser_default.root, !wide && WorkspaceBrowser_default.rail), children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: clsx_default(WorkspaceBrowser_default.sectionHeader, wide && searchSpacingMotionEnabled && WorkspaceBrowser_default.searchSpacingMotion), children: [
      wide && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: clsx_default(WorkspaceBrowser_default.sectionLabel, WorkspaceBrowser_default.wide, searchExpanded && WorkspaceBrowser_default.sectionLabelHidden), children: groupBy === "flat" ? t("section.sessions") : t("section.workspaces") }),
      wide && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: clsx_default(WorkspaceBrowser_default.searchSlot, searchExpanded && WorkspaceBrowser_default.searchSlotExpanded), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "div",
        {
          ref: searchRoot,
          className: clsx_default(WorkspaceBrowser_default.search, searchExpanded && WorkspaceBrowser_default.searchExpanded),
          onClick: () => {
            closeAddWorkspace();
            changeSearchExpanded(true);
            searchInput.current?.focus();
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.Tooltip, { label: t("search"), shortcutKeys: searchShortcut?.keys, side: "bottom", delayMs: 500, disabled: searchExpanded, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "button",
              {
                type: "button",
                className: WorkspaceBrowser_default.searchButton,
                "aria-label": t("search.sessions.aria"),
                "aria-keyshortcuts": searchShortcut?.aria,
                "aria-expanded": searchExpanded,
                onClick: () => {
                  requestSearch();
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconSearchOutlineRegular, { size: searchExpanded ? 11 : 14 })
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "input",
              {
                ref: searchInput,
                className: WorkspaceBrowser_default.searchInput,
                type: "text",
                placeholder: t("search.placeholder"),
                maxLength: SEARCH_QUERY_MAX_CODE_UNITS,
                value: query,
                tabIndex: searchExpanded ? 0 : -1,
                onChange: (e) => {
                  setQuery(sanitizeSearchQuery(e.target.value));
                },
                onKeyDown: (e) => {
                  if (e.key !== "Escape") return;
                  setQuery("");
                  changeSearchExpanded(false);
                }
              }
            ),
            searchExpanded && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "button",
              {
                type: "button",
                className: WorkspaceBrowser_default.clearButton,
                "aria-label": t("search.clear"),
                onClick: (e) => {
                  e.stopPropagation();
                  setQuery("");
                  changeSearchExpanded(false);
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconCloseFillRegular, {})
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: clsx_default(WorkspaceBrowser_default.headerActions, wide && searchExpanded && WorkspaceBrowser_default.headerActionsHidden), children: [
        wide && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          ViewOptionsMenu,
          {
            groupBy,
            orderBy,
            archivedFilter,
            onGroupPick: actions.setGroupBy,
            onOrderPick: (mode) => {
              actions.setOrderBy(mode, activeSessionOrders);
            },
            onArchivedFilterPick: actions.setArchivedFilter,
            t
          }
        ),
        directoryFlowAvailable && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.Tooltip, { label: t("workspace.add"), shortcutKeys: addShortcut?.keys, side: "bottom", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "button",
          {
            ref: wsPlusRef,
            type: "button",
            className: WorkspaceBrowser_default.iconButton,
            "aria-label": t("workspace.add"),
            "aria-keyshortcuts": addShortcut?.aria,
            onClick: () => {
              requestAddWorkspace();
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconProjectAddOutlineRegular, { size: wide ? 16 : 18 })
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        WorkspacePickFlow,
        {
          t,
          open: wsPickerOpen,
          anchorRef: wsPlusRef,
          useWorkspaces,
          createWorkspace,
          useDirectoryFlow,
          renderDirectoryFlow: (owner) => renderSlot("sidebar.workspaces.directoryFlow", owner),
          addOnly: true,
          onBusyChange: setDirectoryBusy,
          side: "right",
          onPick: (workspaceId) => {
            closeAddWorkspace();
            startSession(workspaceId, { clearPreviousDraft: false });
          },
          onClose: () => {
            closeAddWorkspace();
          }
        }
      )
    ] }),
    !wide && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: WorkspaceBrowser_default.search, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.Tooltip, { label: t("search"), shortcutKeys: searchShortcut?.keys, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "button",
      {
        type: "button",
        className: WorkspaceBrowser_default.searchButton,
        "aria-label": t("search.sessions.aria"),
        "aria-keyshortcuts": searchShortcut?.aria,
        onClick: () => {
          requestSearch();
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives4.IconSearchOutlineRegular, { size: 18 })
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: WorkspaceBrowser_default.listArea, children: wide && (normalizedQuery !== "" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      SearchResults,
      {
        usePanelInfo,
        useSessionAccess,
        useSessions,
        useSessionStatus,
        open: openSearchResult,
        onUnarchive: onSessionUnarchive,
        workspaces,
        archivedSessionIds,
        archivedFilter,
        query: normalizedQuery,
        remote: remoteSearch,
        resultLimit: searchResultLimit,
        t
      }
    ) : groupBy === "flat" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      FlatList,
      {
        useSessionAccess,
        usePanelInfo,
        list,
        sessionIds: orderedFlatSessionIds,
        rowState,
        onLeaveArchivedOnly: leaveArchivedOnly,
        workspaceReady,
        animationResetKey: `${groupBy}/${orderBy}/${archivedFilter}`,
        useSessionStatus,
        open: guardedOpen,
        onSessionRenameRequest: requestSessionRename,
        renderSlot,
        openSessionMenu,
        useContextMenu,
        useContextMenuTarget,
        setSessionOrder: saveSessionOrder,
        revealSessionId,
        onSessionRevealed: acknowledgeSessionReveal,
        home,
        t
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      SessionTree,
      {
        useRemoteAccess,
        useSessionAccess,
        useWorkspaceAccess,
        usePanelInfo,
        list,
        shortcuts,
        useSessionStatus,
        onSessionRenameRequest: requestSessionRename,
        renderSlot,
        openSessionMenu,
        useContextMenu,
        openWorkspaceMenu,
        useContextMenuTarget,
        workspaces: orderedWorkspaces,
        ungroupedSessionIds: orderedUngroupedSessionIds,
        workspaceReady,
        nestWorkspaces: groupBy === "workspace-tree",
        animationResetKey: `${groupBy}/${orderBy}/${archivedFilter}`,
        groupExpansion,
        setGroupExpanded: actions.setGroupExpanded,
        setSessionOrder: saveSessionOrder,
        rowState,
        onLeaveArchivedOnly: leaveArchivedOnly,
        startSession,
        open: guardedOpen,
        insertWorkspaceBefore,
        revealSessionId,
        onSessionRevealed: acknowledgeSessionReveal,
        home,
        t
      }
    )) }),
    workspaceActionRequest !== null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      WorkspaceDialogs,
      {
        request: workspaceActionRequest,
        workspaces,
        renameWorkspace,
        deleteWorkspace,
        settleWorkspaceAction,
        t
      },
      `${workspaceActionRequest.action}/${workspaceActionRequest.workspaceId}`
    )
  ] });
}

// packages/lab-sidebar/src/client/plugin/client/session-actions/ArchiveSession.tsx
var import_react6 = require("react");
var import_dsh_client_ui_primitives5 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime5 = require("react/jsx-runtime");
function ArchiveSessionRowButton({
  sessionId,
  useArchived,
  useSessionAccess,
  archiveSession,
  unarchiveSession,
  t
}) {
  const archived = useArchived((set) => set.has(sessionId));
  const allowed = useSessionAccess(sessionId, archived ? "workspace/unarchiveSession" : "workspace/archiveSession");
  if (!allowed) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives5.Tooltip, { label: t(archived ? "actions.unarchive" : "actions.archive"), side: "bottom", align: "end", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "button",
    {
      type: "button",
      className: Rows_default.iconButton,
      "aria-label": t(archived ? "menu.unarchiveSession" : "menu.archiveSession"),
      onClick: () => {
        (archived ? unarchiveSession : archiveSession)(sessionId);
      },
      children: archived ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives5.IconUnarchiveOutlineRegular, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives5.IconArchiveOutlineRegular, { size: 14 })
    }
  ) });
}
function SessionArchiveConfirmDialog({
  useArchiveRequest,
  settleSessionArchive,
  stopAndArchiveSession,
  t
}) {
  const request = useArchiveRequest((pending) => pending);
  if (request === null) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    ArchiveConfirmForm,
    {
      request,
      stopAndArchiveSession,
      onSettle: settleSessionArchive,
      t
    },
    request.sessionId
  );
}
function ArchiveConfirmForm({ request, stopAndArchiveSession, onSettle, t }) {
  const [archiving, setArchiving] = (0, import_react6.useState)(false);
  const [error, setError] = (0, import_react6.useState)(null);
  const close = () => {
    if (archiving) return;
    onSettle();
  };
  const confirm = () => {
    setArchiving(true);
    setError(null);
    stopAndArchiveSession(request.sessionId).then(() => {
      setArchiving(false);
      onSettle();
    }).catch((reason) => {
      setArchiving(false);
      setError(reason instanceof Error ? reason.message : String(reason));
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    import_dsh_client_ui_primitives5.Modal,
    {
      open: true,
      onClose: close,
      closeLabel: t("close"),
      title: t("archive.confirm.title"),
      description: t("archive.confirm.desc", { title: request.displayTitle }),
      footer: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives5.Button, { variant: "outline", disabled: archiving, onClick: close, children: t("cancel") }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_dsh_client_ui_primitives5.Button,
          {
            variant: "outline",
            className: WorkspaceBrowser_default.deleteAction,
            disabled: archiving,
            onClick: confirm,
            children: t("archive.confirm.action")
          }
        )
      ] }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { className: WorkspaceBrowser_default.archiveActivity, "aria-label": t("archive.confirm.activity"), children: request.activity.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: activityLine(entry, t) }, `${entry.kind}-${String(index)}`)) }),
        archiving && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: WorkspaceBrowser_default.deleteStatus, role: "status", children: t("archive.confirm.pending") }),
        error !== null && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: WorkspaceBrowser_default.renameError, role: "alert", children: error })
      ]
    }
  );
}
function activityLine(entry, t) {
  const items = entry.items ?? [];
  const n = items.length;
  const names = items.map((item) => item.label ?? item.id).join(t("archive.confirm.listSeparator"));
  const plural = n === 1 ? "one" : "other";
  switch (entry.kind) {
    case "turn":
      return t("archive.confirm.turn");
    case "subagent":
      return t(`archive.confirm.subagents.${plural}`, { n, names });
    case "job":
      return t(`archive.confirm.jobs.${plural}`, { n, names });
    case "schedule":
      return t(`archive.confirm.schedules.${plural}`, { n, names });
    default:
      return t(`archive.confirm.other.${plural}`, { kind: entry.kind, n });
  }
}

// packages/lab-sidebar/src/client/plugin/client/session-actions/derived.ts
function derive(source, project) {
  let seen;
  let value;
  return {
    getSnapshot: () => {
      const snapshot = source.getSnapshot();
      if (value === void 0 || snapshot !== seen) {
        seen = snapshot;
        value = project(snapshot);
      }
      return value;
    },
    subscribe: (listener) => source.subscribe(listener)
  };
}

// packages/lab-sidebar/src/client/plugin/client/session-actions/context-menus.tsx
function registerSessionMenus(ctx, actions) {
  const t = ctx.locale.bind("workspace");
  const register = (id, order, endpoints, resolve) => {
    ctx.effect(() => ctx.contextMenus.register({
      id: `session.${id}`,
      target: "session",
      order,
      observe: ({ sessionId }) => [
        ctx.workspaces.list,
        ctx.locale,
        ...endpoints.map((action) => ctx.remoteAccess.source("session", sessionId, action))
      ],
      resolve
    }), `ui-workspace: ${id} menu`);
  };
  const allowed = (target, action) => ctx.remoteAccess.source("session", target.sessionId, action).getSnapshot();
  const archived = (target) => ctx.workspaces.list.getSnapshot().archivedSessionIds.includes(target.sessionId);
  register("pin", 100, ["workspace/pinSession", "workspace/unpinSession"], (target) => {
    const pinned = ctx.workspaces.list.getSnapshot().pinnedSessionIds.includes(target.sessionId);
    if (archived(target) || !allowed(target, pinned ? "workspace/unpinSession" : "workspace/pinSession")) return [];
    return [{
      id: "pin",
      label: t(pinned ? "menu.unpinSession" : "menu.pinSession"),
      icon: { key: pinned ? "workspace.unpin" : "workspace.pin" },
      run: () => {
        (pinned ? actions.unpinSession : actions.pinSession)(target.sessionId);
      }
    }];
  });
  register("rename", 200, ["session/rename"], (target) => allowed(target, "session/rename") ? [{
    id: "rename",
    label: t("rename"),
    icon: { key: "workspace.rename" },
    commandId: "session.rename",
    run: () => {
      actions.requestSessionRename(target.sessionId, target.displayTitle);
    }
  }] : []);
  register("fork", 300, ["session/fork"], (target) => allowed(target, "session/fork") ? [{
    id: "fork",
    label: t("menu.fork"),
    icon: { key: "workspace.fork" },
    commandId: "session.fork",
    run: () => {
      actions.forkSession(target.sessionId);
    }
  }] : []);
  register("id", 450, [], (target) => [{
    id: "copy",
    label: t("menu.sessionId"),
    icon: { key: "workspace.copy" },
    separatorBefore: true,
    run: () => actions.copySessionId(target.sessionId)
  }]);
  register("archive", 600, ["workspace/archiveSession", "workspace/unarchiveSession"], (target) => {
    const restoring = archived(target);
    if (!allowed(target, restoring ? "workspace/unarchiveSession" : "workspace/archiveSession")) return [];
    return [{
      id: "archive",
      label: t(restoring ? "menu.unarchiveSession" : "menu.archiveSession"),
      icon: { key: restoring ? "workspace.unarchive" : "workspace.archive" },
      separatorBefore: true,
      afterContent: true,
      ...restoring ? {} : { commandId: "session.archive" },
      run: () => {
        (restoring ? actions.unarchiveSession : actions.archiveSession)(target.sessionId);
      }
    }];
  });
}

// packages/lab-sidebar/src/client/plugin/client/session-actions/PinSession.tsx
var import_dsh_client_ui_primitives6 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime6 = require("react/jsx-runtime");
function usePinState({ sessionId, usePinned, useArchived, useSessionAccess }) {
  const pinned = usePinned((set) => set.has(sessionId));
  return {
    pinned,
    archived: useArchived((archived) => archived.has(sessionId)),
    allowed: useSessionAccess(sessionId, pinned ? "workspace/unpinSession" : "workspace/pinSession")
  };
}
function PinSessionRowButton(props) {
  const { sessionId, pinSession, unpinSession, t } = props;
  const { pinned, archived, allowed } = usePinState(props);
  if (archived || !allowed) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives6.Tooltip, { label: t(pinned ? "actions.unpin" : "actions.pin"), side: "bottom", align: "end", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "button",
    {
      type: "button",
      className: clsx_default(Rows_default.iconButton, pinned && Rows_default.pinnedAction),
      "aria-label": t(pinned ? "menu.unpinSession" : "menu.pinSession"),
      onClick: () => {
        (pinned ? unpinSession : pinSession)(sessionId);
      },
      children: pinned ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives6.IconPinFillRegular, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_dsh_client_ui_primitives6.IconPinOutlineRegular, { size: 14 })
    }
  ) });
}

// packages/lab-sidebar/src/client/plugin/client/session-actions/RenameSession.tsx
var import_react7 = require("react");
var import_dsh_client_ui_primitives7 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime7 = require("react/jsx-runtime");
function SessionRenameDialog({ useRenameRequest, settleSessionRename, renameSession, t }) {
  const request = useRenameRequest((pending) => pending);
  if (request === null) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    RenameForm,
    {
      request,
      renameSession,
      onSettle: settleSessionRename,
      t
    },
    request.sessionId
  );
}
function RenameForm({ request, renameSession, onSettle, t }) {
  const [draft, setDraft] = (0, import_react7.useState)(request.currentTitle);
  const [renaming, setRenaming] = (0, import_react7.useState)(false);
  const [error, setError] = (0, import_react7.useState)(null);
  const composingRef = (0, import_react7.useRef)(false);
  const trimmed = draft.trim();
  const blocked = renaming || trimmed === "";
  const close = () => {
    if (renaming) return;
    onSettle();
  };
  const confirm = () => {
    if (blocked) return;
    setRenaming(true);
    setError(null);
    renameSession(request.sessionId, trimmed).then(() => {
      setRenaming(false);
      onSettle();
    }).catch((reason) => {
      setRenaming(false);
      setError(reason instanceof Error ? reason.message : String(reason));
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    import_dsh_client_ui_primitives7.Modal,
    {
      open: true,
      onClose: close,
      closeLabel: t("close"),
      title: t("rename.session.title"),
      footer: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_dsh_client_ui_primitives7.Button, { variant: "outline", disabled: renaming, onClick: close, children: t("cancel") }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_dsh_client_ui_primitives7.Button, { variant: "primary", disabled: blocked, onClick: confirm, children: t("rename") })
      ] }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "input",
          {
            className: WorkspaceBrowser_default.renameInput,
            value: draft,
            "aria-label": t("field.sessionName"),
            "data-modal-autofocus": true,
            disabled: renaming,
            onFocus: (e) => {
              e.target.select();
            },
            onChange: (e) => {
              setDraft(e.target.value);
              setError(null);
            },
            onCompositionStart: () => {
              composingRef.current = true;
            },
            onCompositionEnd: () => {
              composingRef.current = false;
            },
            onKeyDown: (e) => {
              if (e.key === "Enter" && !composingRef.current) {
                e.preventDefault();
                confirm();
              }
            }
          }
        ),
        error !== null && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: WorkspaceBrowser_default.renameError, role: "alert", children: error })
      ]
    }
  );
}

// packages/lab-sidebar/src/client/plugin/client/session-actions/RowActionToast.tsx
function RowActionToast({ useToast, dismissToast, renderSlot }) {
  const notice = useToast((current) => current);
  if (notice === null) return null;
  return renderSlot("workspace.toast", { ...notice, dismissToast }, { entryKey: notice.kind });
}

// packages/lab-sidebar/src/client/plugin/client/toast/Toast.tsx
var import_dsh_client_ui_primitives8 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime8 = require("react/jsx-runtime");
function ToastEntry(props) {
  const { dismissToast, display, t, renderFactorySlot, seq } = props;
  return renderFactorySlot("workspace.toast.content", { ...display(props, t, dismissToast), seq, onDone: dismissToast });
}
function ArchiveToastEntry(props) {
  const { dismissToast, display, filterAction, useStore, t, renderFactorySlot, seq } = props;
  const archivedVisible = useStore((state) => (state.archivedFilter ?? "default") !== "default");
  const fields = display(props, t, dismissToast);
  return renderFactorySlot("workspace.toast.content", {
    ...fields,
    actions: [...fields.actions ?? [], ...archivedVisible ? [] : [filterAction(t, dismissToast)]],
    seq,
    onDone: dismissToast
  });
}
function WorkspaceToast({ seq, text, tone, holdMs, actions, onDone }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_dsh_client_ui_primitives8.Toast,
    {
      text,
      onDone,
      ...tone === "success" ? { tone: "success" } : {},
      ...tone === "warning" ? { icon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_dsh_client_ui_primitives8.IconWarningOutlineRegular, {}) } : {},
      ...holdMs === void 0 ? {} : { holdMs },
      ...actions === void 0 ? {} : { actions }
    },
    seq
  );
}

// packages/lab-sidebar/src/client/plugin/client/toast/register.ts
function registerToasts(ctx, viewStore, actions) {
  const archiveFilterAction = (t, dismiss) => ({
    prefix: t("toast.archivedOr"),
    label: t("toast.archivedFilter"),
    onClick: () => {
      dismiss();
      actions.showArchived();
    }
  });
  ctx.slots.registerFactory({ name: "workspace.toast.content", scope: "root" }, WorkspaceToast);
  ctx.slots.inject("workspace.toast", function* () {
    yield ctx.slots.register({
      name: "workspace.toast",
      key: "sessionIdCopied",
      locale: "workspace",
      inject: () => ({
        display: (_notice, t) => ({ text: t("toast.sessionIdCopied"), tone: "success" })
      })
    }, ToastEntry);
    yield ctx.slots.register({
      name: "workspace.toast",
      key: "sessionIdCopyFailed",
      locale: "workspace",
      inject: () => ({
        display: (_notice, t) => ({ text: t("toast.sessionIdCopyFailed"), tone: "warning" })
      })
    }, ToastEntry);
    yield ctx.slots.register({
      name: "workspace.toast",
      key: "pinFailed",
      locale: "workspace",
      inject: () => ({
        display: (_notice, t) => ({ text: t("toast.pinFailed"), tone: "warning" })
      })
    }, ToastEntry);
    yield ctx.slots.register({
      name: "workspace.toast",
      key: "unpinFailed",
      locale: "workspace",
      inject: () => ({
        display: (_notice, t) => ({ text: t("toast.unpinFailed"), tone: "warning" })
      })
    }, ToastEntry);
    yield ctx.slots.register({
      name: "workspace.toast",
      key: "archivedNotOpenable",
      locale: "workspace",
      inject: () => ({
        display: (_notice, t) => ({ text: t("toast.archivedNotOpenable"), tone: "warning" })
      })
    }, ToastEntry);
    yield ctx.slots.register({
      name: "workspace.toast",
      key: "defaultWorkspaceFailed",
      locale: "workspace",
      inject: () => ({
        display: (_notice, t) => ({ text: t("defaultWorkspace.failed"), tone: "warning" })
      })
    }, ToastEntry);
    yield ctx.slots.register({
      name: "workspace.toast",
      key: "shortcutForkFailed",
      locale: "workspace",
      inject: () => ({
        display: (notice, t) => ({
          text: t(notice.reason === "unavailable" ? "shortcut.noCompletedTurn" : "shortcut.forkFailed"),
          tone: "plain"
        })
      })
    }, ToastEntry);
    yield ctx.slots.register({
      name: "workspace.toast",
      key: "createFailed",
      locale: "workspace",
      inject: () => ({
        display: (notice, t) => ({ text: t("toast.createFailed", { message: notice.message }), tone: "warning", holdMs: 6e3 })
      })
    }, ToastEntry);
    yield ctx.slots.register({
      name: "workspace.toast",
      key: "forkRequiresOpen",
      locale: "workspace",
      inject: () => ({
        display: (notice, t, dismiss) => ({
          text: t("toast.forkRequiresOpen"),
          tone: "warning",
          holdMs: 6e3,
          actions: [{ label: t("toast.openForkSource"), onClick: () => {
            dismiss();
            actions.openForkSource(notice.sessionId);
          } }]
        })
      })
    }, ToastEntry);
    yield ctx.slots.register({
      name: "workspace.toast",
      key: "archived",
      locale: "workspace",
      store: viewStore,
      inject: () => ({
        display: (notice, t, dismiss) => ({
          text: t("toast.archived"),
          tone: "success",
          holdMs: 6e3,
          actions: [{ label: t("toast.archivedUndo"), onClick: () => {
            dismiss();
            actions.undoArchive(notice.sessionId);
          } }]
        }),
        filterAction: archiveFilterAction
      })
    }, ArchiveToastEntry);
    yield ctx.slots.register({
      name: "workspace.toast",
      key: "stoppedAndArchived",
      locale: "workspace",
      store: viewStore,
      inject: () => ({
        display: (notice, t, dismiss) => ({
          text: t("toast.stoppedAndArchived"),
          tone: "success",
          holdMs: 6e3,
          actions: [{ label: t("toast.archivedUndo"), onClick: () => {
            dismiss();
            actions.undoArchive(notice.sessionId);
          } }]
        }),
        filterAction: archiveFilterAction
      })
    }, ArchiveToastEntry);
  });
}

// packages/lab-sidebar/src/client/plugin/client/locales.ts
var zh = {
  "defaultWorkspace.failed": "\u65E0\u6CD5\u521B\u5EFA\u9ED8\u8BA4\u5DE5\u4F5C\u533A\uFF0C\u8BF7\u901A\u8FC7\u201C\u9009\u62E9\u5DE5\u4F5C\u533A\u201D\u9009\u62E9\u6587\u4EF6\u5939",
  "draft.workspaceRequired": "\u8BF7\u5148\u9009\u62E9\u5DE5\u4F5C\u533A",
  "draft.initializationFailed": "\u6682\u65F6\u65E0\u6CD5\u586B\u5165\u8349\u7A3F\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
  "group.ungrouped": "\u672A\u5206\u7EC4",
  "session.new": "\u65B0\u4F1A\u8BDD",
  "session.untitled": "\u672A\u547D\u540D",
  "shortcut.noSession": "\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u4F1A\u8BDD",
  "shortcut.noPicker": "\u76EE\u5F55\u9009\u62E9\u5668\u4E0D\u53EF\u7528",
  "shortcut.directoryBusy": "\u6B63\u5728\u9009\u62E9\u6216\u6DFB\u52A0\u5DE5\u4F5C\u533A",
  "shortcut.noCompletedTurn": "\u5F53\u524D\u4F1A\u8BDD\u6CA1\u6709\u5DF2\u7ED3\u675F\u7684\u8F6E\u6B21",
  "shortcut.forkFailed": "\u65E0\u6CD5\u5206\u53C9\u4F1A\u8BDD\uFF0C\u8BF7\u91CD\u8BD5",
  "section.workspaces": "\u5DE5\u4F5C\u533A",
  "section.sessions": "\u4F1A\u8BDD",
  "viewOptions.label": "\u89C6\u56FE\u9009\u9879",
  "groupBy.label": "\u5206\u7EC4\u65B9\u5F0F",
  "groupBy.workspace": "\u6309\u5DE5\u4F5C\u533A",
  "groupBy.workspaceTree": "\u6309\u5DE5\u4F5C\u533A\u6811",
  "groupBy.flat": "\u5355\u5217\u8868",
  "orderBy.label": "\u6392\u5E8F\u65B9\u5F0F",
  "orderBy.manual": "\u624B\u52A8\u6392\u5E8F",
  "orderBy.updated": "\u6700\u8FD1\u66F4\u65B0",
  "filterBy.label": "\u7B5B\u9009\u4F1A\u8BDD",
  "viewOptions.hideArchived": "\u9690\u85CF\u5DF2\u5F52\u6863",
  "viewOptions.showArchived": "\u5168\u90E8\u5BF9\u8BDD\uFF08\u663E\u793A\u5DF2\u5F52\u6863\uFF09",
  "viewOptions.onlyArchived": "\u4EC5\u663E\u793A\u5DF2\u5F52\u6863",
  "sessions.expand": "\u5C55\u5F00\u5176\u4F59 {n} \u4E2A\u4F1A\u8BDD",
  "sessions.collapse": "\u6536\u8D77",
  "empty.none": "\u6682\u65E0\u4F1A\u8BDD",
  "empty.noneArchived": "\u6682\u65E0\u5DF2\u5F52\u6863\u4F1A\u8BDD",
  "empty.viewOthers": "\u67E5\u770B\u5176\u4ED6\u4F1A\u8BDD",
  "empty.noMatches": "\u65E0\u5339\u914D\u7ED3\u679C",
  "workspace.add": "\u6DFB\u52A0\u5DE5\u4F5C\u533A",
  "search.sessions.aria": "\u641C\u7D22\u4F1A\u8BDD",
  "search.placeholder": "\u641C\u7D22\u4F1A\u8BDD\u540D\u79F0",
  "search.clear": "\u6E05\u9664\u641C\u7D22",
  "search.results.aria": "\u641C\u7D22\u7ED3\u679C",
  "search.pending": "\u6B63\u5728\u641C\u7D22\u4F1A\u8BDD\u5386\u53F2\u2026",
  "search.noMatches": "\u65E0\u5339\u914D\u4F1A\u8BDD",
  "search.hasMore": "\u4EC5\u663E\u793A\u524D {n} \u6761\u7ED3\u679C\uFF0C\u8BF7\u7F29\u5C0F\u641C\u7D22\u8303\u56F4\u3002",
  "menu.addWorkspace": "\u6DFB\u52A0\u5DE5\u4F5C\u533A\u2026",
  "picker.loading": "\u6B63\u5728\u52A0\u8F7D\u5DE5\u4F5C\u533A\u2026",
  "conflict.named": "\u5DF2\u5B58\u5728\u540D\u4E3A\u201C{name}\u201D\u7684\u5DE5\u4F5C\u533A\u3002",
  "folderError.title": "\u65E0\u6CD5\u6253\u5F00\u6587\u4EF6\u5939",
  "folderError.retry": "\u91CD\u65B0\u9009\u62E9",
  "rename": "\u91CD\u547D\u540D",
  "rename.workspace.title": "\u91CD\u547D\u540D\u5DE5\u4F5C\u533A",
  "rename.session.title": "\u91CD\u547D\u540D\u4F1A\u8BDD",
  "field.workspaceName": "\u5DE5\u4F5C\u533A\u540D\u79F0",
  "field.sessionName": "\u4F1A\u8BDD\u540D\u79F0",
  "delete.workspace": "\u5220\u9664\u5DE5\u4F5C\u533A",
  "delete.desc": "\u5C06\u628A\u201C{name}\u201D\u4ECE\u5DE5\u4F5C\u533A\u5217\u8868\u4E2D\u79FB\u9664\u3002\u6587\u4EF6\u5939\u4E0E\u4F1A\u8BDD\u8BB0\u5F55\u4F1A\u4FDD\u7559\uFF0C\u5176\u4F1A\u8BDD\u5C06\u663E\u793A\u5728\u201C\u672A\u5206\u7EC4\u201D\u4E0B\u3002",
  "delete.pending": "\u6B63\u5728\u5220\u9664\u5DE5\u4F5C\u533A\u2026",
  "menu.fork": "\u5206\u53C9\u4F1A\u8BDD",
  "menu.archiveSession": "\u5F52\u6863\u4F1A\u8BDD",
  "menu.unarchiveSession": "\u53D6\u6D88\u5F52\u6863",
  "menu.pinSession": "\u7F6E\u9876\u4F1A\u8BDD",
  "menu.unpinSession": "\u53D6\u6D88\u7F6E\u9876",
  "menu.sessionId": "\u590D\u5236 Session ID",
  "toast.sessionIdCopied": "Session ID \u5DF2\u590D\u5236",
  "toast.sessionIdCopyFailed": "\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5",
  "row.archived": "\u5DF2\u5F52\u6863",
  "row.pinned": "\u5DF2\u7F6E\u9876",
  "toast.archivedNotOpenable": "\u5DF2\u5F52\u6863\u5BF9\u8BDD\u6682\u65F6\u65E0\u6CD5\u67E5\u770B\uFF0C\u8BF7\u53D6\u6D88\u5F52\u6863\u540E\u67E5\u770B",
  "toast.archived": "\u4F1A\u8BDD\u5DF2\u5F52\u6863\uFF0C\u53EF",
  "toast.stoppedAndArchived": "\u5DF2\u505C\u6B62\u5E76\u5F52\u6863\uFF0C\u53EF",
  "archive.confirm.title": "\u505C\u6B62\u5E76\u5F52\u6863\u6B64\u4F1A\u8BDD\uFF1F",
  "archive.confirm.desc": "\u201C{title}\u201D\u4ECD\u6709\u6B63\u5728\u8FDB\u884C\u7684\u5DE5\u4F5C\u3002\u5F52\u6863\u4F1A\u5148\u505C\u6B62\u8FD9\u4E9B\u5DE5\u4F5C\uFF1B\u4E4B\u540E\u53EF\u5728\u4FA7\u680F\u7B5B\u9009\u201C\u5168\u90E8\u5BF9\u8BDD\uFF08\u663E\u793A\u5DF2\u5F52\u6863\uFF09\u201D\u4E2D\u6062\u590D\u4F1A\u8BDD\uFF0C\u88AB\u505C\u6B62\u7684\u5DE5\u4F5C\u4E0D\u4F1A\u81EA\u52A8\u7EE7\u7EED\u3002",
  "archive.confirm.activity": "\u5C06\u88AB\u505C\u6B62\u7684\u5DE5\u4F5C",
  "archive.confirm.turn": "\u8FDB\u884C\u4E2D\u7684\u56DE\u5408",
  "archive.confirm.subagents.one": "{n} \u4E2A\u8FD0\u884C\u4E2D\u7684\u5B50\u667A\u80FD\u4F53\uFF1A{names}",
  "archive.confirm.subagents.other": "{n} \u4E2A\u8FD0\u884C\u4E2D\u7684\u5B50\u667A\u80FD\u4F53\uFF1A{names}",
  "archive.confirm.jobs.one": "{n} \u4E2A\u540E\u53F0\u4EFB\u52A1\uFF1A{names}",
  "archive.confirm.jobs.other": "{n} \u4E2A\u540E\u53F0\u4EFB\u52A1\uFF1A{names}",
  "archive.confirm.schedules.one": "{n} \u6761\u5B9A\u65F6\u63D0\u9192\uFF1A{names}",
  "archive.confirm.schedules.other": "{n} \u6761\u5B9A\u65F6\u63D0\u9192\uFF1A{names}",
  "archive.confirm.other.one": "{n} \u9879\u5176\u4ED6\u5DE5\u4F5C\uFF08{kind}\uFF09",
  "archive.confirm.other.other": "{n} \u9879\u5176\u4ED6\u5DE5\u4F5C\uFF08{kind}\uFF09",
  "archive.confirm.listSeparator": "\u3001",
  "archive.confirm.action": "\u505C\u6B62\u5E76\u5F52\u6863",
  "archive.confirm.pending": "\u6B63\u5728\u505C\u6B62\u5E76\u5F52\u6863\u2026",
  "toast.archivedUndo": "\u64A4\u9500",
  "toast.archivedOr": "\u6216",
  "toast.archivedFilter": "\u7B5B\u9009\u5DF2\u5F52\u6863\u4F1A\u8BDD",
  "toast.pinFailed": "\u7F6E\u9876\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
  "toast.unpinFailed": "\u53D6\u6D88\u7F6E\u9876\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
  "toast.createFailed": "\u65B0\u5EFA\u4F1A\u8BDD\u5931\u8D25\uFF1A{message}",
  "toast.forkRequiresOpen": "\u8BF7\u5148\u6253\u5F00\u539F\u4F1A\u8BDD\u5B8C\u6210\u8FC1\u79FB\uFF0C\u518D\u521B\u5EFA\u5206\u652F",
  "toast.openForkSource": "\u6253\u5F00\u539F\u4F1A\u8BDD",
  "sessions.count.one": "{n} \u4E2A\u4F1A\u8BDD",
  "sessions.count.other": "{n} \u4E2A\u4F1A\u8BDD",
  "actions.workspace.aria": "\u5DE5\u4F5C\u533A\u201C{name}\u201D\u7684\u64CD\u4F5C",
  "actions.session.aria": "\u4F1A\u8BDD\u201C{name}\u201D\u7684\u64CD\u4F5C",
  "actions.archive": "\u5F52\u6863\u4F1A\u8BDD",
  "actions.unarchive": "\u53D6\u6D88\u5F52\u6863",
  "actions.pin": "\u7F6E\u9876\u4F1A\u8BDD",
  "actions.unpin": "\u53D6\u6D88\u7F6E\u9876",
  "actions.newSession": "\u65B0\u4F1A\u8BDD",
  "actions.newSession.aria": "\u5728\u201C{name}\u201D\u4E2D\u65B0\u5EFA\u4F1A\u8BDD",
  "status.running": "\u8FDB\u884C\u4E2D",
  "status.subagentsRunning.one": "{n} \u4E2A\u5B50\u667A\u80FD\u4F53\u8FD0\u884C\u4E2D",
  "status.subagentsRunning.other": "{n} \u4E2A\u5B50\u667A\u80FD\u4F53\u8FD0\u884C\u4E2D",
  "status.idle": "\u7A7A\u95F2",
  "status.waitingApproval": "\u7B49\u5F85\u5BA1\u6279",
  "status.planReview": "\u8BA1\u5212\u5F85\u5BA1",
  "status.waitingAnswer": "\u7B49\u5F85\u56DE\u7B54",
  "status.compact.approval": "\u5F85\u5BA1\u6279",
  "status.compact.planReview": "\u8BA1\u5212\u5F85\u5BA1",
  "status.compact.answer": "\u5F85\u56DE\u7B54",
  "status.completed": "\u5DF2\u5B8C\u6210",
  "hover.created": "\u521B\u5EFA\u4E8E {time}",
  "hover.copied": "\u5DF2\u590D\u5236",
  "date.ymd": "{y}\u5E74{m}\u6708{d}\u65E5",
  "time.now": "\u521A\u521A",
  "time.minutes": "{n}\u5206\u949F",
  "time.hours": "{n}\u5C0F\u65F6",
  "time.days": "{n}\u5929",
  "time.months": "{n}\u4E2A\u6708",
  "time.years": "{n}\u5E74",
  "time.ago": "{t}\u524D"
};
var en = {
  "defaultWorkspace.failed": "Unable to create default workspace. Use Choose workspace to select a folder.",
  "draft.workspaceRequired": "Choose a workspace first.",
  "draft.initializationFailed": "Could not fill the draft. Please try again shortly.",
  "group.ungrouped": "Ungrouped",
  "session.new": "New Session",
  "session.untitled": "Untitled",
  "shortcut.noSession": "Select a session first",
  "shortcut.noPicker": "Directory picker unavailable",
  "shortcut.directoryBusy": "Selecting or adding a workspace",
  "shortcut.noCompletedTurn": "This session has no completed turn",
  "shortcut.forkFailed": "Could not fork the session. Try again.",
  "section.workspaces": "Workspaces",
  "section.sessions": "Sessions",
  "viewOptions.label": "View options",
  "groupBy.label": "Group by",
  "groupBy.workspace": "WorkSpace",
  "groupBy.workspaceTree": "Workspace Tree",
  "groupBy.flat": "In one list",
  "orderBy.label": "Order by",
  "orderBy.manual": "Manual",
  "orderBy.updated": "Last updated",
  "filterBy.label": "Filter sessions",
  "viewOptions.hideArchived": "Hide archived",
  "viewOptions.showArchived": "All conversations (show archived)",
  "viewOptions.onlyArchived": "Archived only",
  "sessions.expand": "Show {n} more sessions",
  "sessions.collapse": "Show less",
  "empty.none": "No sessions yet",
  "empty.noneArchived": "No archived sessions yet",
  "empty.viewOthers": "View other sessions",
  "empty.noMatches": "No matches",
  "workspace.add": "Add workspace",
  "search.sessions.aria": "Search sessions",
  "search.placeholder": "Search session names",
  "search.clear": "Clear search",
  "search.results.aria": "Search results",
  "search.pending": "Searching session history\u2026",
  "search.noMatches": "No matching sessions",
  "search.hasMore": "Showing the first {n} results. Narrow your search.",
  "menu.addWorkspace": "Add workspace\u2026",
  "picker.loading": "Loading workspaces\u2026",
  "conflict.named": "A workspace named \u201C{name}\u201D already exists.",
  "folderError.title": "Couldn\u2019t open folder",
  "folderError.retry": "Choose again",
  "rename": "Rename",
  "rename.workspace.title": "Rename workspace",
  "rename.session.title": "Rename session",
  "field.workspaceName": "Workspace name",
  "field.sessionName": "Session name",
  "delete.workspace": "Delete workspace",
  "delete.desc": "This removes \u201C{name}\u201D from the workspace list. The folder and session logs will be kept. Its sessions will appear under Ungrouped.",
  "delete.pending": "Deleting workspace\u2026",
  "menu.fork": "Fork session",
  "menu.archiveSession": "Archive session",
  "menu.unarchiveSession": "Unarchive session",
  "menu.pinSession": "Pin session",
  "menu.unpinSession": "Unpin session",
  "menu.sessionId": "Copy Session ID",
  "toast.sessionIdCopied": "Session ID copied",
  "toast.sessionIdCopyFailed": "Copy failed. Try again.",
  "row.archived": "Archived",
  "row.pinned": "Pinned",
  "toast.archivedNotOpenable": "Archived sessions cannot be opened. Unarchive it to view.",
  "toast.archived": "Session archived. You can ",
  "toast.stoppedAndArchived": "Session stopped and archived. You can ",
  "archive.confirm.title": "Stop and archive this session?",
  "archive.confirm.desc": "\u201C{title}\u201D still has work in progress. Archiving stops it first; you can restore the session later from the \u201CAll conversations (show archived)\u201D filter in the sidebar, and the stopped work will not resume on its own.",
  "archive.confirm.activity": "Work that will be stopped",
  "archive.confirm.turn": "The turn in progress",
  "archive.confirm.subagents.one": "{n} running subagent: {names}",
  "archive.confirm.subagents.other": "{n} running subagents: {names}",
  "archive.confirm.jobs.one": "{n} background job: {names}",
  "archive.confirm.jobs.other": "{n} background jobs: {names}",
  "archive.confirm.schedules.one": "{n} scheduled reminder: {names}",
  "archive.confirm.schedules.other": "{n} scheduled reminders: {names}",
  "archive.confirm.other.one": "{n} other item of work ({kind})",
  "archive.confirm.other.other": "{n} other items of work ({kind})",
  "archive.confirm.listSeparator": ", ",
  "archive.confirm.action": "Stop and archive",
  "archive.confirm.pending": "Stopping and archiving\u2026",
  "toast.archivedUndo": "undo",
  "toast.archivedOr": " or ",
  "toast.archivedFilter": "filter archived sessions",
  "toast.pinFailed": "Pin failed. Try again later.",
  "toast.unpinFailed": "Unpin failed. Try again later.",
  "toast.createFailed": "New session failed: {message}",
  "toast.forkRequiresOpen": "Open the original session to complete migration before creating a branch.",
  "toast.openForkSource": "Open original session",
  "sessions.count.one": "{n} session",
  "sessions.count.other": "{n} sessions",
  "actions.workspace.aria": "Workspace actions for {name}",
  "actions.session.aria": "Session actions for {name}",
  "actions.archive": "Archive",
  "actions.unarchive": "Unarchive",
  "actions.pin": "Pin",
  "actions.unpin": "Unpin",
  "actions.newSession": "New session",
  "actions.newSession.aria": "New session in {name}",
  "status.running": "Running",
  "status.subagentsRunning.one": "{n} subagent running",
  "status.subagentsRunning.other": "{n} subagents running",
  "status.idle": "Idle",
  "status.waitingApproval": "Waiting for approval",
  "status.planReview": "Plan awaiting review",
  "status.waitingAnswer": "Waiting for answer",
  "status.compact.approval": "Approval",
  "status.compact.planReview": "Plan review",
  "status.compact.answer": "Answer",
  "status.completed": "Completed",
  "hover.created": "Created {time}",
  "hover.copied": "Copied",
  "date.ymd": "{y}-{m}-{d}",
  "time.now": "now",
  "time.minutes": "{n}min",
  "time.hours": "{n}h",
  "time.days": "{n}d",
  "time.months": "{n}mo",
  "time.years": "{n}y",
  "time.ago": "{t} ago"
};
var ja = {
  "defaultWorkspace.failed": "\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u3092\u4F5C\u6210\u3067\u304D\u307E\u305B\u3093\u3002\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u3092\u9078\u629E\u3057\u3066\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002",
  "draft.workspaceRequired": "\u5148\u306B\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "draft.initializationFailed": "\u4E0B\u66F8\u304D\u3092\u57CB\u3081\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u3057\u3070\u3089\u304F\u3057\u3066\u304B\u3089\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
  "group.ungrouped": "\u30B0\u30EB\u30FC\u30D7\u306A\u3057",
  "session.new": "\u65B0\u3057\u3044\u30BB\u30C3\u30B7\u30E7\u30F3",
  "session.untitled": "\u7121\u984C",
  "shortcut.noSession": "\u5148\u306B\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
  "shortcut.noPicker": "\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u30D4\u30C3\u30AB\u30FC\u3092\u5229\u7528\u3067\u304D\u307E\u305B\u3093",
  "shortcut.directoryBusy": "\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u3092\u9078\u629E\u307E\u305F\u306F\u8FFD\u52A0\u3057\u3066\u3044\u307E\u3059",
  "shortcut.noCompletedTurn": "\u3053\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u306F\u5B8C\u4E86\u3057\u305F\u30BF\u30FC\u30F3\u304C\u3042\u308A\u307E\u305B\u3093",
  "shortcut.forkFailed": "\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u30D5\u30A9\u30FC\u30AF\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
  "section.workspaces": "\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9",
  "section.sessions": "\u30BB\u30C3\u30B7\u30E7\u30F3",
  "viewOptions.label": "\u8868\u793A\u30AA\u30D7\u30B7\u30E7\u30F3",
  "groupBy.label": "\u30B0\u30EB\u30FC\u30D7\u5316",
  "groupBy.workspace": "\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9",
  "groupBy.workspaceTree": "\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u30C4\u30EA\u30FC",
  "groupBy.flat": "1\u3064\u306E\u30EA\u30B9\u30C8",
  "orderBy.label": "\u4E26\u3073\u9806",
  "orderBy.manual": "\u624B\u52D5",
  "orderBy.updated": "\u6700\u7D42\u66F4\u65B0",
  "filterBy.label": "\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u7D5E\u308A\u8FBC\u3080",
  "viewOptions.hideArchived": "\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u975E\u8868\u793A",
  "viewOptions.showArchived": "\u3059\u3079\u3066\u306E\u4F1A\u8A71\uFF08\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u8868\u793A\uFF09",
  "viewOptions.onlyArchived": "\u30A2\u30FC\u30AB\u30A4\u30D6\u306E\u307F",
  "sessions.expand": "\u3055\u3089\u306B{n}\u4EF6\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u8868\u793A",
  "sessions.collapse": "\u6298\u308A\u305F\u305F\u3080",
  "empty.none": "\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093",
  "empty.noneArchived": "\u30A2\u30FC\u30AB\u30A4\u30D6\u3055\u308C\u305F\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093",
  "empty.viewOthers": "\u4ED6\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u8868\u793A",
  "empty.noMatches": "\u4E00\u81F4\u306A\u3057",
  "workspace.add": "\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u3092\u8FFD\u52A0",
  "search.sessions.aria": "\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u691C\u7D22",
  "search.placeholder": "\u30BB\u30C3\u30B7\u30E7\u30F3\u540D\u3092\u691C\u7D22",
  "search.clear": "\u691C\u7D22\u3092\u30AF\u30EA\u30A2",
  "search.results.aria": "\u691C\u7D22\u7D50\u679C",
  "search.pending": "\u30BB\u30C3\u30B7\u30E7\u30F3\u5C65\u6B74\u3092\u691C\u7D22\u4E2D\u2026",
  "search.noMatches": "\u4E00\u81F4\u3059\u308B\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u3042\u308A\u307E\u305B\u3093",
  "search.hasMore": "\u6700\u521D\u306E{n}\u4EF6\u306E\u7D50\u679C\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059\u3002\u691C\u7D22\u3092\u7D5E\u308A\u8FBC\u3093\u3067\u304F\u3060\u3055\u3044\u3002",
  "menu.addWorkspace": "\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u3092\u8FFD\u52A0\u2026",
  "picker.loading": "\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026",
  "conflict.named": "\u300C{name}\u300D\u3068\u3044\u3046\u540D\u524D\u306E\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u306F\u65E2\u306B\u5B58\u5728\u3057\u307E\u3059\u3002",
  "folderError.title": "\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u958B\u3051\u307E\u305B\u3093\u3067\u3057\u305F",
  "folderError.retry": "\u9078\u3073\u76F4\u3059",
  "rename": "\u540D\u524D\u3092\u5909\u66F4",
  "rename.workspace.title": "\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u540D\u3092\u5909\u66F4",
  "rename.session.title": "\u30BB\u30C3\u30B7\u30E7\u30F3\u540D\u3092\u5909\u66F4",
  "field.workspaceName": "\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u540D",
  "field.sessionName": "\u30BB\u30C3\u30B7\u30E7\u30F3\u540D",
  "delete.workspace": "\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u3092\u524A\u9664",
  "delete.desc": "\u300C{name}\u300D\u3092\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u4E00\u89A7\u304B\u3089\u524A\u9664\u3057\u307E\u3059\u3002\u30D5\u30A9\u30EB\u30C0\u3068\u30BB\u30C3\u30B7\u30E7\u30F3\u30ED\u30B0\u306F\u4FDD\u6301\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u300C\u672A\u5206\u985E\u300D\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002",
  "delete.pending": "\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u3092\u524A\u9664\u4E2D\u2026",
  "menu.fork": "\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u30D5\u30A9\u30FC\u30AF",
  "menu.archiveSession": "\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u30A2\u30FC\u30AB\u30A4\u30D6",
  "menu.unarchiveSession": "\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u89E3\u9664",
  "menu.pinSession": "\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u30D4\u30F3\u7559\u3081",
  "menu.unpinSession": "\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30D4\u30F3\u7559\u3081\u3092\u89E3\u9664",
  "menu.sessionId": "\u30BB\u30C3\u30B7\u30E7\u30F3ID\u3092\u30B3\u30D4\u30FC",
  "toast.sessionIdCopied": "\u30BB\u30C3\u30B7\u30E7\u30F3ID\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",
  "toast.sessionIdCopyFailed": "\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
  "row.archived": "\u30A2\u30FC\u30AB\u30A4\u30D6\u6E08\u307F",
  "row.pinned": "\u30D4\u30F3\u7559\u3081\u6E08\u307F",
  "toast.archivedNotOpenable": "\u30A2\u30FC\u30AB\u30A4\u30D6\u6E08\u307F\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u958B\u3051\u307E\u305B\u3093\u3002\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u89E3\u9664\u3057\u3066\u8868\u793A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
  "toast.archived": "\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u30A2\u30FC\u30AB\u30A4\u30D6\u3057\u307E\u3057\u305F\u3002",
  "toast.stoppedAndArchived": "\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u505C\u6B62\u3057\u3066\u30A2\u30FC\u30AB\u30A4\u30D6\u3057\u307E\u3057\u305F\u3002",
  "archive.confirm.title": "\u3053\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u505C\u6B62\u3057\u3066\u30A2\u30FC\u30AB\u30A4\u30D6\u3057\u307E\u3059\u304B\uFF1F",
  "archive.confirm.desc": "\u300C{title}\u300D\u306B\u306F\u9032\u884C\u4E2D\u306E\u4F5C\u696D\u304C\u3042\u308A\u307E\u3059\u3002\u30A2\u30FC\u30AB\u30A4\u30D6\u3059\u308B\u3068\u307E\u305A\u505C\u6B62\u3055\u308C\u307E\u3059\u3002\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u5F8C\u304B\u3089\u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u300C\u3059\u3079\u3066\u306E\u4F1A\u8A71\uFF08\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u8868\u793A\uFF09\u300D\u30D5\u30A3\u30EB\u30BF\u30FC\u3067\u5FA9\u5143\u3067\u304D\u307E\u3059\u304C\u3001\u505C\u6B62\u3055\u308C\u305F\u4F5C\u696D\u306F\u81EA\u52D5\u7684\u306B\u518D\u958B\u3055\u308C\u307E\u305B\u3093\u3002",
  "archive.confirm.activity": "\u505C\u6B62\u3055\u308C\u308B\u4F5C\u696D",
  "archive.confirm.turn": "\u9032\u884C\u4E2D\u306E\u30BF\u30FC\u30F3",
  "archive.confirm.subagents.one": "\u5B9F\u884C\u4E2D\u306E\u30B5\u30D6\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8 {n} \u4EF6: {names}",
  "archive.confirm.subagents.other": "\u5B9F\u884C\u4E2D\u306E\u30B5\u30D6\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8 {n} \u4EF6: {names}",
  "archive.confirm.jobs.one": "\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u30B8\u30E7\u30D6 {n} \u4EF6: {names}",
  "archive.confirm.jobs.other": "\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9\u30B8\u30E7\u30D6 {n} \u4EF6: {names}",
  "archive.confirm.schedules.one": "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3055\u308C\u305F\u30EA\u30DE\u30A4\u30F3\u30C0\u30FC {n} \u4EF6: {names}",
  "archive.confirm.schedules.other": "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3055\u308C\u305F\u30EA\u30DE\u30A4\u30F3\u30C0\u30FC {n} \u4EF6: {names}",
  "archive.confirm.other.one": "\u305D\u306E\u4ED6\u306E\u4F5C\u696D {n} \u4EF6\uFF08{kind}\uFF09",
  "archive.confirm.other.other": "\u305D\u306E\u4ED6\u306E\u4F5C\u696D {n} \u4EF6\uFF08{kind}\uFF09",
  "archive.confirm.listSeparator": "\u3001",
  "archive.confirm.action": "\u505C\u6B62\u3057\u3066\u30A2\u30FC\u30AB\u30A4\u30D6",
  "archive.confirm.pending": "\u505C\u6B62\u3057\u3066\u30A2\u30FC\u30AB\u30A4\u30D6\u4E2D\u2026",
  "toast.archivedUndo": "\u5143\u306B\u623B\u3059",
  "toast.archivedOr": " \u307E\u305F\u306F ",
  "toast.archivedFilter": "\u30A2\u30FC\u30AB\u30A4\u30D6\u6E08\u307F\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u7D5E\u308A\u8FBC\u3080",
  "toast.pinFailed": "\u30D4\u30F3\u7559\u3081\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u5F8C\u3067\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
  "toast.unpinFailed": "\u30D4\u30F3\u7559\u3081\u306E\u89E3\u9664\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u5F8C\u3067\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
  "toast.createFailed": "\u65B0\u3057\u3044\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u4F5C\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F: {message}",
  "toast.forkRequiresOpen": "\u30D6\u30E9\u30F3\u30C1\u3092\u4F5C\u6210\u3059\u308B\u524D\u306B\u3001\u79FB\u884C\u3092\u5B8C\u4E86\u3059\u308B\u305F\u3081\u5143\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002",
  "toast.openForkSource": "\u5143\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u958B\u304F",
  "sessions.count.one": "\u30BB\u30C3\u30B7\u30E7\u30F3 {n} \u4EF6",
  "sessions.count.other": "\u30BB\u30C3\u30B7\u30E7\u30F3 {n} \u4EF6",
  "actions.workspace.aria": "{name} \u306E\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9\u64CD\u4F5C",
  "actions.session.aria": "{name} \u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u64CD\u4F5C",
  "actions.archive": "\u30A2\u30FC\u30AB\u30A4\u30D6",
  "actions.unarchive": "\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u89E3\u9664",
  "actions.pin": "\u30D4\u30F3\u7559\u3081",
  "actions.unpin": "\u30D4\u30F3\u7559\u3081\u3092\u89E3\u9664",
  "actions.newSession": "\u65B0\u3057\u3044\u30BB\u30C3\u30B7\u30E7\u30F3",
  "actions.newSession.aria": "{name} \u3067\u65B0\u3057\u3044\u30BB\u30C3\u30B7\u30E7\u30F3",
  "status.running": "\u5B9F\u884C\u4E2D",
  "status.subagentsRunning.one": "\u30B5\u30D6\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8 {n} \u4EF6\u304C\u5B9F\u884C\u4E2D",
  "status.subagentsRunning.other": "\u30B5\u30D6\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8 {n} \u4EF6\u304C\u5B9F\u884C\u4E2D",
  "status.idle": "\u5F85\u6A5F\u4E2D",
  "status.waitingApproval": "\u627F\u8A8D\u5F85\u3061",
  "status.planReview": "\u8A08\u753B\u306E\u30EC\u30D3\u30E5\u30FC\u5F85\u3061",
  "status.waitingAnswer": "\u56DE\u7B54\u5F85\u3061",
  "status.compact.approval": "\u627F\u8A8D",
  "status.compact.planReview": "\u8A08\u753B\u30EC\u30D3\u30E5\u30FC",
  "status.compact.answer": "\u56DE\u7B54",
  "status.completed": "\u5B8C\u4E86",
  "hover.created": "\u4F5C\u6210\u65E5\u6642 {time}",
  "hover.copied": "\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",
  "date.ymd": "{y}-{m}-{d}",
  "time.now": "\u4ECA",
  "time.minutes": "{n}\u5206",
  "time.hours": "{n}\u6642\u9593",
  "time.days": "{n}\u65E5",
  "time.months": "{n}\u304B\u6708",
  "time.years": "{n}\u5E74",
  "time.ago": "{t}\u524D"
};
var es = {
  "defaultWorkspace.failed": "No se puede crear el espacio de trabajo predeterminado. Utilice Elegir espacio de trabajo para seleccionar una carpeta.",
  "draft.workspaceRequired": "Elija un espacio de trabajo primero.",
  "draft.initializationFailed": "No se pudo completar el borrador. Int\xE9ntelo de nuevo en breve.",
  "group.ungrouped": "Desagrupados",
  "session.new": "Nueva sesi\xF3n",
  "session.untitled": "Sin t\xEDtulo",
  "shortcut.noSession": "Seleccione una sesi\xF3n primero",
  "shortcut.noPicker": "Selector de directorio no disponible",
  "shortcut.directoryBusy": "Seleccionar o agregar un espacio de trabajo",
  "shortcut.noCompletedTurn": "Esta sesi\xF3n no tiene turno completo",
  "shortcut.forkFailed": "No se pudo bifurcar la sesi\xF3n. Intentar otra vez.",
  "section.workspaces": "Espacios de trabajo",
  "section.sessions": "Sesiones",
  "viewOptions.label": "Ver opciones",
  "groupBy.label": "Agrupar por",
  "groupBy.workspace": "Espacio de trabajo",
  "groupBy.workspaceTree": "\xC1rbol del espacio de trabajo",
  "groupBy.flat": "en una lista",
  "orderBy.label": "Ordenar por",
  "orderBy.manual": "manuales",
  "orderBy.updated": "\xDAltima actualizaci\xF3n",
  "filterBy.label": "Filtrar sesiones",
  "viewOptions.hideArchived": "Ocultar archivado",
  "viewOptions.showArchived": "Todas las conversaciones (mostrar archivadas)",
  "viewOptions.onlyArchived": "S\xF3lo archivado",
  "sessions.expand": "Mostrar {n} m\xE1s sesiones",
  "sessions.collapse": "Mostrar menos",
  "empty.none": "A\xFAn no hay sesiones",
  "empty.noneArchived": "A\xFAn no hay sesiones archivadas",
  "empty.viewOthers": "Ver otras sesiones",
  "empty.noMatches": "No hay coincidencias",
  "workspace.add": "Agregar espacio de trabajo",
  "search.sessions.aria": "Buscar sesiones",
  "search.placeholder": "Buscar nombres de sesiones",
  "search.clear": "Borrar b\xFAsqueda",
  "search.results.aria": "Resultados de la b\xFAsqueda",
  "search.pending": "Buscando el historial de sesiones\u2026",
  "search.noMatches": "No hay sesiones coincidentes",
  "search.hasMore": "Mostrando los primeros resultados de {n}. Limita tu b\xFAsqueda.",
  "menu.addWorkspace": "Agregar espacio de trabajo\u2026",
  "picker.loading": "Cargando espacios de trabajo\u2026",
  "conflict.named": 'Ya existe un espacio de trabajo denominado "{name}".',
  "folderError.title": "No se pudo abrir la carpeta",
  "folderError.retry": "Elige de nuevo",
  "rename": "Cambiar nombre",
  "rename.workspace.title": "Cambiar nombre del espacio de trabajo",
  "rename.session.title": "Cambiar nombre de sesi\xF3n",
  "field.workspaceName": "Nombre del espacio de trabajo",
  "field.sessionName": "Nombre de la sesi\xF3n",
  "delete.workspace": "Eliminar espacio de trabajo",
  "delete.desc": 'Esto elimina "{name}" de la lista de espacios de trabajo. Se conservar\xE1n los registros de carpetas y sesiones. Sus sesiones aparecer\xE1n en Desagrupadas.',
  "delete.pending": "Eliminando espacio de trabajo\u2026",
  "menu.fork": "Crear una bifurcaci\xF3n de la sesi\xF3n",
  "menu.archiveSession": "Sesi\xF3n de archivo",
  "menu.unarchiveSession": "Desarchivar sesi\xF3n",
  "menu.pinSession": "Fijar sesi\xF3n",
  "menu.unpinSession": "Desfijar sesi\xF3n",
  "menu.sessionId": "Copiar ID de sesi\xF3n",
  "toast.sessionIdCopied": "ID de sesi\xF3n copiada",
  "toast.sessionIdCopyFailed": "La copia fall\xF3. Intentar otra vez.",
  "row.archived": "Archivado",
  "row.pinned": "Fijado",
  "toast.archivedNotOpenable": "Las sesiones archivadas no se pueden abrir. Desarchivarlo para verlo.",
  "toast.archived": "Sesi\xF3n archivada. tu puedes ",
  "toast.stoppedAndArchived": "Sesi\xF3n detenida y archivada. tu puedes ",
  "archive.confirm.title": "\xBFDetener y archivar esta sesi\xF3n?",
  "archive.confirm.desc": "\u201C{title}\u201D todav\xEDa tiene trabajo en progreso. Archivarlo lo detiene primero; puedes restaurar la sesi\xF3n m\xE1s tarde desde el filtro \u201CTodas las conversaciones (mostrar archivadas)\u201D en la barra lateral, y el trabajo detenido no se reanudar\xE1 por s\xED solo.",
  "archive.confirm.activity": "Trabajo que ser\xE1 detenido",
  "archive.confirm.turn": "El turno en curso",
  "archive.confirm.subagents.one": "{n} ejecutando subagente: {names}",
  "archive.confirm.subagents.other": "{n} ejecutando subagentes: {names}",
  "archive.confirm.jobs.one": "Trabajo en segundo plano {n}: {names}",
  "archive.confirm.jobs.other": "Trabajos en segundo plano {n}: {names}",
  "archive.confirm.schedules.one": "Recordatorio programado {n}: {names}",
  "archive.confirm.schedules.other": "{n} recordatorios programados: {names}",
  "archive.confirm.other.one": "{n} otro elemento de trabajo ({kind})",
  "archive.confirm.other.other": "{n} otros elementos de trabajo ({kind})",
  "archive.confirm.listSeparator": ", ",
  "archive.confirm.action": "Detener y archivar",
  "archive.confirm.pending": "Deteniendo y archivando\u2026",
  "toast.archivedUndo": "deshacer",
  "toast.archivedOr": " o ",
  "toast.archivedFilter": "filtrar sesiones archivadas",
  "toast.pinFailed": "No se pudo fijar. Int\xE9ntalo de nuevo m\xE1s tarde.",
  "toast.unpinFailed": "No se pudo desfijar. Int\xE9ntalo de nuevo m\xE1s tarde.",
  "toast.createFailed": "Nueva sesi\xF3n fall\xF3: {message}",
  "toast.forkRequiresOpen": "Abra la sesi\xF3n original para completar la migraci\xF3n antes de crear una rama.",
  "toast.openForkSource": "Abrir sesi\xF3n original",
  "sessions.count.one": "Sesi\xF3n {n}",
  "sessions.count.other": "Sesiones {n}",
  "actions.workspace.aria": "Acciones del espacio de trabajo para {name}",
  "actions.session.aria": "Acciones de sesi\xF3n para {name}",
  "actions.archive": "Archivo",
  "actions.unarchive": "Desarchivar",
  "actions.pin": "Fijar",
  "actions.unpin": "Desfijar",
  "actions.newSession": "Nueva sesi\xF3n",
  "actions.newSession.aria": "Nueva sesi\xF3n en {name}",
  "status.running": "corriendo",
  "status.subagentsRunning.one": "Subagente {n} ejecut\xE1ndose",
  "status.subagentsRunning.other": "Subagentes {n} ejecut\xE1ndose",
  "status.idle": "inactivo",
  "status.waitingApproval": "Esperando aprobaci\xF3n",
  "status.planReview": "Plan pendiente de revisi\xF3n",
  "status.waitingAnswer": "esperando respuesta",
  "status.compact.approval": "Aprobaci\xF3n",
  "status.compact.planReview": "Revisi\xF3n del plan",
  "status.compact.answer": "respuesta",
  "status.completed": "Completado",
  "hover.created": "Creado {time}",
  "hover.copied": "Copiado",
  "date.ymd": "{y}-{m}-{d}",
  "time.now": "ahora",
  "time.minutes": "{n}min",
  "time.hours": "{n}h",
  "time.days": "{n}d",
  "time.months": "{n}mo",
  "time.years": "{n}y",
  "time.ago": "Hace {t}"
};
var fr = {
  "defaultWorkspace.failed": "Impossible de cr\xE9er un espace de travail par d\xE9faut. Utilisez Choisir un espace de travail pour s\xE9lectionner un dossier.",
  "draft.workspaceRequired": "Choisissez d'abord un espace de travail.",
  "draft.initializationFailed": "Impossible de remplir le projet. Veuillez r\xE9essayer sous peu.",
  "group.ungrouped": "Non group\xE9",
  "session.new": "Nouvelle s\xE9ance",
  "session.untitled": "Sans titre",
  "shortcut.noSession": "S\xE9lectionnez d'abord une session",
  "shortcut.noPicker": "S\xE9lecteur de r\xE9pertoire indisponible",
  "shortcut.directoryBusy": "S\xE9lection ou ajout d'un espace de travail",
  "shortcut.noCompletedTurn": "Cette session n'a pas de tour termin\xE9",
  "shortcut.forkFailed": "Impossible de bifurquer la session. Essayer \xE0 nouveau.",
  "section.workspaces": "Espaces de travail",
  "section.sessions": "S\xE9ances",
  "viewOptions.label": "Afficher les options",
  "groupBy.label": "Regrouper par",
  "groupBy.workspace": "Espace de travail",
  "groupBy.workspaceTree": "Arborescence de l'espace de travail",
  "groupBy.flat": "Dans une liste",
  "orderBy.label": "Commander par",
  "orderBy.manual": "Manuel",
  "orderBy.updated": "Derni\xE8re mise \xE0 jour",
  "filterBy.label": "Filtrer les sessions",
  "viewOptions.hideArchived": "Masquer les archives",
  "viewOptions.showArchived": "Toutes les conversations (afficher les archives)",
  "viewOptions.onlyArchived": "Archiv\xE9 uniquement",
  "sessions.expand": "Afficher {n} plus de sessions",
  "sessions.collapse": "Afficher moins",
  "empty.none": "Aucune s\xE9ance pour l'instant",
  "empty.noneArchived": "Aucune session archiv\xE9e pour l'instant",
  "empty.viewOthers": "Voir les autres s\xE9ances",
  "empty.noMatches": "Aucune correspondance",
  "workspace.add": "Ajouter un espace de travail",
  "search.sessions.aria": "Rechercher des sessions",
  "search.placeholder": "Rechercher des noms de sessions",
  "search.clear": "Effacer la recherche",
  "search.results.aria": "R\xE9sultats de la recherche",
  "search.pending": "Recherche dans l'historique des sessions\u2026",
  "search.noMatches": "Aucune session correspondante",
  "search.hasMore": "Affichage des premiers r\xE9sultats {n}. Affinez votre recherche.",
  "menu.addWorkspace": "Ajouter un espace de travail\u2026",
  "picker.loading": "Chargement des espaces de travail\u2026",
  "conflict.named": "Un espace de travail nomm\xE9 \xAB\xA0{name}\xA0\xBB existe d\xE9j\xE0.",
  "folderError.title": "Impossible d'ouvrir le dossier",
  "folderError.retry": "Choisir \xE0 nouveau",
  "rename": "Renommer",
  "rename.workspace.title": "Renommer l'espace de travail",
  "rename.session.title": "Renommer la session",
  "field.workspaceName": "Nom de l'espace de travail",
  "field.sessionName": "Nom de la s\xE9ance",
  "delete.workspace": "Supprimer l'espace de travail",
  "delete.desc": "Cela supprime \xAB\xA0{name}\xA0\xBB de la liste des espaces de travail. Les journaux de dossiers et de sessions seront conserv\xE9s. Ses sessions appara\xEEtront sous Non group\xE9es.",
  "delete.pending": "Suppression de l'espace de travail\u2026",
  "menu.fork": "Cr\xE9er une branche de la session",
  "menu.archiveSession": "S\xE9ance d'archivage",
  "menu.unarchiveSession": "Session de d\xE9sarchivage",
  "menu.pinSession": "\xC9pingler la session",
  "menu.unpinSession": "D\xE9s\xE9pingler la session",
  "menu.sessionId": "Copier l'ID de session",
  "toast.sessionIdCopied": "ID de session copi\xE9",
  "toast.sessionIdCopyFailed": "La copie a \xE9chou\xE9. Essayer \xE0 nouveau.",
  "row.archived": "Archiv\xE9",
  "row.pinned": "\xC9pingl\xE9",
  "toast.archivedNotOpenable": "Les sessions archiv\xE9es ne peuvent pas \xEAtre ouvertes. D\xE9sarchivez-le pour le visualiser.",
  "toast.archived": "S\xE9ance archiv\xE9e. Vous pouvez ",
  "toast.stoppedAndArchived": "Session arr\xEAt\xE9e et archiv\xE9e. Vous pouvez ",
  "archive.confirm.title": "Arr\xEAter et archiver cette session\xA0?",
  "archive.confirm.desc": "\xAB\xA0{title}\xA0\xBB a encore des travaux en cours. L'archivage l'arr\xEAte en premier\xA0; vous pouvez restaurer la session plus tard \xE0 partir du filtre \xAB Toutes les conversations (afficher les archives) \xBB dans la barre lat\xE9rale, et le travail arr\xEAt\xE9 ne reprendra pas de lui-m\xEAme.",
  "archive.confirm.activity": "Travaux qui seront arr\xEAt\xE9s",
  "archive.confirm.turn": "Le tour en cours",
  "archive.confirm.subagents.one": "Sous-agent en cours d'ex\xE9cution {n}\xA0: {names}",
  "archive.confirm.subagents.other": "{n} ex\xE9cutant des sous-agents\xA0: {names}",
  "archive.confirm.jobs.one": "Travail en arri\xE8re-plan {n}\xA0: {names}",
  "archive.confirm.jobs.other": "Travaux en arri\xE8re-plan {n}\xA0: {names}",
  "archive.confirm.schedules.one": "Rappel programm\xE9 {n}\xA0: {names}",
  "archive.confirm.schedules.other": "Rappels programm\xE9s {n}\xA0: {names}",
  "archive.confirm.other.one": "{n} autre \xE9l\xE9ment de travail ({kind})",
  "archive.confirm.other.other": "{n} autres \xE9l\xE9ments de travail ({kind})",
  "archive.confirm.listSeparator": ", ",
  "archive.confirm.action": "Arr\xEAter et archiver",
  "archive.confirm.pending": "Arr\xEAt et archivage\u2026",
  "toast.archivedUndo": "annuler",
  "toast.archivedOr": " ou ",
  "toast.archivedFilter": "filtrer les sessions archiv\xE9es",
  "toast.pinFailed": "L\u2019\xE9pinglage a \xE9chou\xE9. R\xE9essayez plus tard.",
  "toast.unpinFailed": "Impossible de d\xE9s\xE9pingler. R\xE9essayez plus tard.",
  "toast.createFailed": "\xC9chec de la nouvelle session\xA0: {message}",
  "toast.forkRequiresOpen": "Ouvrez la session d'origine pour terminer la migration avant de cr\xE9er une branche.",
  "toast.openForkSource": "Ouvrir la session originale",
  "sessions.count.one": "S\xE9ance {n}",
  "sessions.count.other": "S\xE9ances {n}",
  "actions.workspace.aria": "Actions de l'espace de travail pour {name}",
  "actions.session.aria": "Actions de session pour {name}",
  "actions.archive": "Archiver",
  "actions.unarchive": "D\xE9sarchiver",
  "actions.pin": "\xC9pingler",
  "actions.unpin": "D\xE9s\xE9pingler",
  "actions.newSession": "Nouvelle s\xE9ance",
  "actions.newSession.aria": "Nouvelle s\xE9ance dans {name}",
  "status.running": "Courir",
  "status.subagentsRunning.one": "Sous-agent {n} en cours d'ex\xE9cution",
  "status.subagentsRunning.other": "Sous-agents {n} en cours d'ex\xE9cution",
  "status.idle": "Inactif",
  "status.waitingApproval": "En attente d'approbation",
  "status.planReview": "Plan en attente d'examen",
  "status.waitingAnswer": "En attente de r\xE9ponse",
  "status.compact.approval": "Approbation",
  "status.compact.planReview": "R\xE9vision des plans",
  "status.compact.answer": "R\xE9ponse",
  "status.completed": "Termin\xE9",
  "hover.created": "Cr\xE9\xE9 {time}",
  "hover.copied": "Copi\xE9",
  "date.ymd": "{y}-{m}-{d}",
  "time.now": "maintenant",
  "time.minutes": "{n}min",
  "time.hours": "{n}h",
  "time.days": "{n}d",
  "time.months": "{n}mo",
  "time.years": "{n}y",
  "time.ago": "Il y a {t}"
};
var de = {
  "defaultWorkspace.failed": "Der Standardarbeitsbereich kann nicht erstellt werden. Verwenden Sie \u201EArbeitsbereich ausw\xE4hlen\u201C, um einen Ordner auszuw\xE4hlen.",
  "draft.workspaceRequired": "W\xE4hlen Sie zun\xE4chst einen Arbeitsbereich.",
  "draft.initializationFailed": "Der Entwurf konnte nicht ausgef\xFCllt werden. Bitte versuchen Sie es in K\xFCrze noch einmal.",
  "group.ungrouped": "Nicht gruppiert",
  "session.new": "Neue Sitzung",
  "session.untitled": "Ohne Titel",
  "shortcut.noSession": "W\xE4hlen Sie zun\xE4chst eine Sitzung aus",
  "shortcut.noPicker": "Verzeichnisauswahl nicht verf\xFCgbar",
  "shortcut.directoryBusy": "Ausw\xE4hlen oder Hinzuf\xFCgen eines Arbeitsbereichs",
  "shortcut.noCompletedTurn": "Diese Sitzung hat keine abgeschlossene Runde",
  "shortcut.forkFailed": "Die Sitzung konnte nicht aufgeteilt werden. Versuchen Sie es erneut.",
  "section.workspaces": "Arbeitsbereiche",
  "section.sessions": "Sitzungen",
  "viewOptions.label": "Optionen anzeigen",
  "groupBy.label": "Gruppieren nach",
  "groupBy.workspace": "WorkSpace",
  "groupBy.workspaceTree": "Arbeitsbereichsbaum",
  "groupBy.flat": "In einer Liste",
  "orderBy.label": "Bestellen nach",
  "orderBy.manual": "Handbuch",
  "orderBy.updated": "Zuletzt aktualisiert",
  "filterBy.label": "Sitzungen filtern",
  "viewOptions.hideArchived": "Archiviert ausblenden",
  "viewOptions.showArchived": "Alle Gespr\xE4che (archiviert anzeigen)",
  "viewOptions.onlyArchived": "Nur archiviert",
  "sessions.expand": "Weitere Sitzungen anzeigen {n}",
  "sessions.collapse": "Weniger anzeigen",
  "empty.none": "Noch keine Sitzungen",
  "empty.noneArchived": "Noch keine archivierten Sitzungen",
  "empty.viewOthers": "Andere Sitzungen anzeigen",
  "empty.noMatches": "Keine \xDCbereinstimmungen",
  "workspace.add": "Arbeitsbereich hinzuf\xFCgen",
  "search.sessions.aria": "Sitzungen suchen",
  "search.placeholder": "Suchen Sie nach Sitzungsnamen",
  "search.clear": "Suche l\xF6schen",
  "search.results.aria": "Suchergebnisse",
  "search.pending": "Sitzungsverlauf wird durchsucht\u2026",
  "search.noMatches": "Keine passenden Sitzungen",
  "search.hasMore": "Zeigt die ersten {n}-Ergebnisse. Grenzen Sie Ihre Suche ein.",
  "menu.addWorkspace": "Arbeitsbereich hinzuf\xFCgen\u2026",
  "picker.loading": "Arbeitsbereiche werden geladen\u2026",
  "conflict.named": "Ein Arbeitsbereich mit dem Namen \u201E{name}\u201C ist bereits vorhanden.",
  "folderError.title": "Der Ordner konnte nicht ge\xF6ffnet werden",
  "folderError.retry": "W\xE4hlen Sie erneut",
  "rename": "Umbenennen",
  "rename.workspace.title": "Arbeitsbereich umbenennen",
  "rename.session.title": "Sitzung umbenennen",
  "field.workspaceName": "Name des Arbeitsbereichs",
  "field.sessionName": "Sitzungsname",
  "delete.workspace": "Arbeitsbereich l\xF6schen",
  "delete.desc": "Dadurch wird \u201E{name}\u201C aus der Arbeitsbereichsliste entfernt. Die Ordner- und Sitzungsprotokolle werden aufbewahrt. Seine Sitzungen werden unter \u201ENicht gruppiert\u201C angezeigt.",
  "delete.pending": "Arbeitsbereich wird gel\xF6scht\u2026",
  "menu.fork": "Sitzung abzweigen",
  "menu.archiveSession": "Archivsitzung",
  "menu.unarchiveSession": "Sitzung dearchivieren",
  "menu.pinSession": "Sitzung anheften",
  "menu.unpinSession": "Sitzung l\xF6sen",
  "menu.sessionId": "Sitzungs-ID kopieren",
  "toast.sessionIdCopied": "Sitzungs-ID kopiert",
  "toast.sessionIdCopyFailed": "Der Kopiervorgang ist fehlgeschlagen. Versuchen Sie es erneut.",
  "row.archived": "Archiviert",
  "row.pinned": "Angepinnt",
  "toast.archivedNotOpenable": "Archivierte Sitzungen k\xF6nnen nicht ge\xF6ffnet werden. Entpacken Sie es zur Ansicht.",
  "toast.archived": "Sitzung archiviert. Du kannst ",
  "toast.stoppedAndArchived": "Sitzung gestoppt und archiviert. Du kannst ",
  "archive.confirm.title": "Diese Sitzung stoppen und archivieren?",
  "archive.confirm.desc": "\u201E{title}\u201C ist noch in Arbeit. Die Archivierung stoppt es zun\xE4chst; Sie k\xF6nnen die Sitzung sp\xE4ter \xFCber den Filter \u201EAlle Konversationen (archivierte anzeigen)\u201C in der Seitenleiste wiederherstellen, und die angehaltene Arbeit wird nicht von alleine fortgesetzt.",
  "archive.confirm.activity": "Arbeiten, die gestoppt werden",
  "archive.confirm.turn": "Die laufende Runde",
  "archive.confirm.subagents.one": "{n}, laufender Subagent: {names}",
  "archive.confirm.subagents.other": "{n}, auf dem Subagenten ausgef\xFChrt werden: {names}",
  "archive.confirm.jobs.one": "{n} Hintergrundjob: {names}",
  "archive.confirm.jobs.other": "{n} Hintergrundjobs: {names}",
  "archive.confirm.schedules.one": "{n} geplante Erinnerung: {names}",
  "archive.confirm.schedules.other": "{n} geplante Erinnerungen: {names}",
  "archive.confirm.other.one": "{n} sonstiger Arbeitsgegenstand ({kind})",
  "archive.confirm.other.other": "{n} sonstige Arbeiten ({kind})",
  "archive.confirm.listSeparator": ", ",
  "archive.confirm.action": "Stoppen und archivieren",
  "archive.confirm.pending": "Stoppen und archivieren\u2026",
  "toast.archivedUndo": "r\xFCckg\xE4ngig machen",
  "toast.archivedOr": " oder ",
  "toast.archivedFilter": "Archivierte Sitzungen filtern",
  "toast.pinFailed": "Anheften fehlgeschlagen. Versuchen Sie es sp\xE4ter erneut.",
  "toast.unpinFailed": "L\xF6sen fehlgeschlagen. Versuchen Sie es sp\xE4ter erneut.",
  "toast.createFailed": "Neue Sitzung fehlgeschlagen: {message}",
  "toast.forkRequiresOpen": "\xD6ffnen Sie die urspr\xFCngliche Sitzung, um die Migration abzuschlie\xDFen, bevor Sie einen Zweig erstellen.",
  "toast.openForkSource": "\xD6ffnen Sie die urspr\xFCngliche Sitzung",
  "sessions.count.one": "{n}-Sitzung",
  "sessions.count.other": "{n}-Sitzungen",
  "actions.workspace.aria": "Arbeitsbereichsaktionen f\xFCr {name}",
  "actions.session.aria": "Sitzungsaktionen f\xFCr {name}",
  "actions.archive": "Archiv",
  "actions.unarchive": "Dearchivieren",
  "actions.pin": "Anheften",
  "actions.unpin": "L\xF6sen",
  "actions.newSession": "Neue Sitzung",
  "actions.newSession.aria": "Neue Sitzung in {name}",
  "status.running": "Laufen",
  "status.subagentsRunning.one": "{n}-Subagent l\xE4uft",
  "status.subagentsRunning.other": "{n} Subagenten laufen",
  "status.idle": "Leerlauf",
  "status.waitingApproval": "Warten auf Genehmigung",
  "status.planReview": "Plan wartet auf \xDCberpr\xFCfung",
  "status.waitingAnswer": "Warte auf Antwort",
  "status.compact.approval": "Zustimmung",
  "status.compact.planReview": "Plan\xFCberpr\xFCfung",
  "status.compact.answer": "Antwort",
  "status.completed": "Abgeschlossen",
  "hover.created": "Erstellt {time}",
  "hover.copied": "Kopiert",
  "date.ymd": "{y}-{m}-{d}",
  "time.now": "jetzt",
  "time.minutes": "{n}min",
  "time.hours": "{n}h",
  "time.days": "{n}d",
  "time.months": "{n}mo",
  "time.years": "{n}y",
  "time.ago": "Vor {t}"
};
var ru = {
  "defaultWorkspace.failed": "\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0447\u0443\u044E \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \xAB\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E\xBB, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443.",
  "draft.workspaceRequired": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u043C\u0435\u0441\u0442\u043E.",
  "draft.initializationFailed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F.",
  "group.ungrouped": "\u0420\u0430\u0437\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E",
  "session.new": "\u041D\u043E\u0432\u0430\u044F \u0441\u0435\u0441\u0441\u0438\u044F",
  "session.untitled": "\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F",
  "shortcut.noSession": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0430\u043D\u0441",
  "shortcut.noPicker": "\u0412\u044B\u0431\u043E\u0440 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D.",
  "shortcut.directoryBusy": "\u0412\u044B\u0431\u043E\u0440 \u0438\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430",
  "shortcut.noCompletedTurn": "\u0412 \u044D\u0442\u043E\u0439 \u0441\u0435\u0441\u0441\u0438\u0438 \u043D\u0435\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0445 \u0445\u043E\u0434\u043E\u0432",
  "shortcut.forkFailed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0440\u0430\u0437\u0432\u0435\u0442\u0432\u0438\u0442\u044C \u0441\u0435\u0430\u043D\u0441. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",
  "section.workspaces": "\u0420\u0430\u0431\u043E\u0447\u0438\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430",
  "section.sessions": "\u0421\u0435\u0441\u0441\u0438\u0438",
  "viewOptions.label": "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B",
  "groupBy.label": "\u0413\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E",
  "groupBy.workspace": "\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E",
  "groupBy.workspaceTree": "\u0414\u0435\u0440\u0435\u0432\u043E \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
  "groupBy.flat": "\u0412 \u043E\u0434\u043D\u043E\u043C \u0441\u043F\u0438\u0441\u043A\u0435",
  "orderBy.label": "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E",
  "orderBy.manual": "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E",
  "orderBy.updated": "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435",
  "filterBy.label": "\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0430\u043D\u0441\u044B",
  "viewOptions.hideArchived": "\u0421\u043A\u0440\u044B\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432\u0435",
  "viewOptions.showArchived": "\u0412\u0441\u0435 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u044B (\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432\u0435)",
  "viewOptions.onlyArchived": "\u0422\u043E\u043B\u044C\u043A\u043E \u0432 \u0430\u0440\u0445\u0438\u0432\u0435",
  "sessions.expand": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u0441\u0435\u0430\u043D\u0441\u043E\u0432 {n}",
  "sessions.collapse": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435",
  "empty.none": "\u0421\u0435\u0430\u043D\u0441\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442",
  "empty.noneArchived": "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0441\u0435\u0441\u0441\u0438\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442",
  "empty.viewOthers": "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0435\u0441\u0441\u0438\u0438",
  "empty.noMatches": "\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439",
  "workspace.add": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0430\u0431\u043E\u0447\u0443\u044E \u043E\u0431\u043B\u0430\u0441\u0442\u044C",
  "search.sessions.aria": "\u041F\u043E\u0438\u0441\u043A \u0441\u0435\u0430\u043D\u0441\u043E\u0432",
  "search.placeholder": "\u041F\u043E\u0438\u0441\u043A \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0439 \u0441\u0435\u0430\u043D\u0441\u043E\u0432",
  "search.clear": "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A",
  "search.results.aria": "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E\u0438\u0441\u043A\u0430",
  "search.pending": "\u041F\u043E\u0438\u0441\u043A \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0441\u0435\u0430\u043D\u0441\u043E\u0432\u2026",
  "search.noMatches": "\u041D\u0435\u0442 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u0441\u0435\u0430\u043D\u0441\u043E\u0432",
  "search.hasMore": "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u043F\u0435\u0440\u0432\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B {n}. \u0421\u0443\u0437\u044C\u0442\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u043F\u043E\u0438\u0441\u043A\u0430.",
  "menu.addWorkspace": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E\u2026",
  "picker.loading": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u043E\u0431\u043B\u0430\u0441\u0442\u0435\u0439\u2026",
  "conflict.named": "\u0420\u0430\u0431\u043E\u0447\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0441 \u0438\u043C\u0435\u043D\u0435\u043C \xAB{name}\xBB \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.",
  "folderError.title": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u043F\u043A\u0443",
  "folderError.retry": "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437",
  "rename": "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C",
  "rename.workspace.title": "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0447\u0443\u044E \u043E\u0431\u043B\u0430\u0441\u0442\u044C",
  "rename.session.title": "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0430\u043D\u0441",
  "field.workspaceName": "\u0418\u043C\u044F \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438",
  "field.sessionName": "\u0418\u043C\u044F \u0441\u0435\u0430\u043D\u0441\u0430",
  "delete.workspace": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u0430\u0431\u043E\u0447\u0443\u044E \u043E\u0431\u043B\u0430\u0441\u0442\u044C",
  "delete.desc": "\u042D\u0442\u043E \u0443\u0434\u0430\u043B\u0438\u0442 \xAB{name}\xBB \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438. \u0416\u0443\u0440\u043D\u0430\u043B\u044B \u043F\u0430\u043F\u043E\u043A \u0438 \u0441\u0435\u0430\u043D\u0441\u043E\u0432 \u0431\u0443\u0434\u0443\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B. \u0415\u0433\u043E \u0441\u0435\u0430\u043D\u0441\u044B \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \xAB\u0420\u0430\u0437\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E\xBB.",
  "delete.pending": "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438\u2026",
  "menu.fork": "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0442\u0432\u0435\u0442\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u0435\u0430\u043D\u0441\u0430",
  "menu.archiveSession": "\u0410\u0440\u0445\u0438\u0432 \u0441\u0435\u0430\u043D\u0441\u0430",
  "menu.unarchiveSession": "\u0420\u0430\u0437\u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0430\u043D\u0441",
  "menu.pinSession": "\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0441\u0435\u0430\u043D\u0441",
  "menu.unpinSession": "\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0441\u0435\u0430\u043D\u0441",
  "menu.sessionId": "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u0435\u0430\u043D\u0441\u0430",
  "toast.sessionIdCopied": "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u0435\u0430\u043D\u0441\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D.",
  "toast.sessionIdCopyFailed": "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",
  "row.archived": "\u0412 \u0430\u0440\u0445\u0438\u0432\u0435",
  "row.pinned": "\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E",
  "toast.archivedNotOpenable": "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441\u0435\u0430\u043D\u0441\u044B \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u044C. \u0420\u0430\u0437\u0430\u0440\u0445\u0438\u0432\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043E \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430.",
  "toast.archived": "\u0421\u0435\u0441\u0441\u0438\u044F \u0437\u0430\u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0430. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 ",
  "toast.stoppedAndArchived": "\u0421\u0435\u0430\u043D\u0441 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0438 \u0437\u0430\u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 ",
  "archive.confirm.title": "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0438 \u0437\u0430\u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u0441\u0435\u0430\u043D\u0441?",
  "archive.confirm.desc": "\u041D\u0430\u0434 \xAB{title}\xBB \u0432\u0441\u0435 \u0435\u0449\u0435 \u0432\u0435\u0434\u0435\u0442\u0441\u044F \u0440\u0430\u0431\u043E\u0442\u0430. \u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0435\u0433\u043E \u043F\u0435\u0440\u0432\u044B\u043C; \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0435\u0441\u0441\u0438\u044E \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0437\u0436\u0435 \u0438\u0437 \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \xAB\u0412\u0441\u0435 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u044B (\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432\u0435)\xBB \u0432 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u043D\u0435 \u0432\u043E\u0437\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0441\u0430\u043C\u0430 \u043F\u043E \u0441\u0435\u0431\u0435.",
  "archive.confirm.activity": "\u0420\u0430\u0431\u043E\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0431\u0443\u0434\u0435\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430",
  "archive.confirm.turn": "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0445\u043E\u0434",
  "archive.confirm.subagents.one": "{n} \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0449\u0438\u0439 \u0441\u0443\u0431\u0430\u0433\u0435\u043D\u0442: {names}",
  "archive.confirm.subagents.other": "{n} \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0449\u0438\u0435 \u0441\u0443\u0431\u0430\u0433\u0435\u043D\u0442\u044B: {names}",
  "archive.confirm.jobs.one": "{n} \u0444\u043E\u043D\u043E\u0432\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435: {names}",
  "archive.confirm.jobs.other": "{n} \u0444\u043E\u043D\u043E\u0432\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F: {names}",
  "archive.confirm.schedules.one": "\u0417\u0430\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435 {n}: {names}",
  "archive.confirm.schedules.other": "\u0417\u0430\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F {n}: {names}",
  "archive.confirm.other.one": "{n} \u0434\u0440\u0443\u0433\u043E\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0440\u0430\u0431\u043E\u0442\u044B ({kind})",
  "archive.confirm.other.other": "{n} \u043F\u0440\u043E\u0447\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u044B ({kind})",
  "archive.confirm.listSeparator": ", ",
  "archive.confirm.action": "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0438 \u0437\u0430\u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  "archive.confirm.pending": "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0438 \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u2026",
  "toast.archivedUndo": "\u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  "toast.archivedOr": " \u0438\u043B\u0438 ",
  "toast.archivedFilter": "\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441\u0435\u0430\u043D\u0441\u044B",
  "toast.pinFailed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u043F\u043E\u0437\u0436\u0435.",
  "toast.unpinFailed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u043F\u043E\u0437\u0436\u0435.",
  "toast.createFailed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0441\u0435\u0430\u043D\u0441: {message}.",
  "toast.forkRequiresOpen": "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0441\u0435\u0430\u043D\u0441, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u044E, \u043F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0432\u0435\u0442\u043A\u0443.",
  "toast.openForkSource": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u0441\u0435\u0430\u043D\u0441",
  "sessions.count.one": "\u0421\u0435\u0430\u043D\u0441 {n}",
  "sessions.count.other": "\u0421\u0435\u0441\u0441\u0438\u0438 {n}",
  "actions.workspace.aria": "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0434\u043B\u044F {name}",
  "actions.session.aria": "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0435\u0430\u043D\u0441\u0430 \u0434\u043B\u044F {name}",
  "actions.archive": "\u0410\u0440\u0445\u0438\u0432",
  "actions.unarchive": "\u0420\u0430\u0437\u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  "actions.pin": "\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C",
  "actions.unpin": "\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C",
  "actions.newSession": "\u041D\u043E\u0432\u0430\u044F \u0441\u0435\u0441\u0441\u0438\u044F",
  "actions.newSession.aria": "\u041D\u043E\u0432\u0430\u044F \u0441\u0435\u0441\u0441\u0438\u044F \u0432 {name}",
  "status.running": "\u0411\u0435\u0433",
  "status.subagentsRunning.one": "\u0421\u0443\u0431\u0430\u0433\u0435\u043D\u0442 {n} \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442",
  "status.subagentsRunning.other": "\u0421\u0443\u0431\u0430\u0433\u0435\u043D\u0442\u044B {n} \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442",
  "status.idle": "\u041F\u0440\u043E\u0441\u0442\u043E\u0439",
  "status.waitingApproval": "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u044F",
  "status.planReview": "\u041F\u043B\u0430\u043D \u043E\u0436\u0438\u0434\u0430\u0435\u0442 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044F",
  "status.waitingAnswer": "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u043E\u0442\u0432\u0435\u0442\u0430",
  "status.compact.approval": "\u041E\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u0435",
  "status.compact.planReview": "\u041E\u0431\u0437\u043E\u0440 \u043F\u043B\u0430\u043D\u0430",
  "status.compact.answer": "\u041E\u0442\u0432\u0435\u0442",
  "status.completed": "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E",
  "hover.created": "\u0421\u043E\u0437\u0434\u0430\u043D\u043E {time}",
  "hover.copied": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E",
  "date.ymd": "{y}-{m}-{d}",
  "time.now": "\u0441\u0435\u0439\u0447\u0430\u0441",
  "time.minutes": "{n}\u043C\u0438\u043D",
  "time.hours": "{n}h",
  "time.days": "{n}d",
  "time.months": "{n}mo",
  "time.years": "{n}y",
  "time.ago": "{t} \u043D\u0430\u0437\u0430\u0434"
};
var pt = {
  "defaultWorkspace.failed": "N\xE3o foi poss\xEDvel criar o espa\xE7o de trabalho padr\xE3o. Use Escolher espa\xE7o de trabalho para selecionar uma pasta.",
  "draft.workspaceRequired": "Escolha um espa\xE7o de trabalho primeiro.",
  "draft.initializationFailed": "N\xE3o foi poss\xEDvel preencher o rascunho. Por favor, tente novamente em breve.",
  "group.ungrouped": "Desagrupado",
  "session.new": "Nova sess\xE3o",
  "session.untitled": "Sem t\xEDtulo",
  "shortcut.noSession": "Selecione uma sess\xE3o primeiro",
  "shortcut.noPicker": "Seletor de diret\xF3rio indispon\xEDvel",
  "shortcut.directoryBusy": "Selecionando ou adicionando um espa\xE7o de trabalho",
  "shortcut.noCompletedTurn": "Esta sess\xE3o n\xE3o tem turno conclu\xEDdo",
  "shortcut.forkFailed": "N\xE3o foi poss\xEDvel bifurcar a sess\xE3o. Tente novamente.",
  "section.workspaces": "Espa\xE7os de trabalho",
  "section.sessions": "Sess\xF5es",
  "viewOptions.label": "Ver op\xE7\xF5es",
  "groupBy.label": "Agrupar por",
  "groupBy.workspace": "Espa\xE7o de trabalho",
  "groupBy.workspaceTree": "\xC1rvore do espa\xE7o de trabalho",
  "groupBy.flat": "Em uma lista",
  "orderBy.label": "Encomendar por",
  "orderBy.manual": "Manuais",
  "orderBy.updated": "\xDAltima atualiza\xE7\xE3o",
  "filterBy.label": "Filtrar sess\xF5es",
  "viewOptions.hideArchived": "Ocultar arquivado",
  "viewOptions.showArchived": "Todas as conversas (mostrar arquivadas)",
  "viewOptions.onlyArchived": "Somente arquivado",
  "sessions.expand": "Mostrar mais {n} sess\xF5es",
  "sessions.collapse": "Mostrar menos",
  "empty.none": "Ainda n\xE3o h\xE1 sess\xF5es",
  "empty.noneArchived": "Ainda n\xE3o h\xE1 sess\xF5es arquivadas",
  "empty.viewOthers": "Ver outras sess\xF5es",
  "empty.noMatches": "Nenhuma correspond\xEAncia",
  "workspace.add": "Adicionar espa\xE7o de trabalho",
  "search.sessions.aria": "Buscar sess\xF5es",
  "search.placeholder": "Pesquisar nomes de sess\xF5es",
  "search.clear": "Limpar pesquisa",
  "search.results.aria": "Resultados da pesquisa",
  "search.pending": "Pesquisando hist\xF3rico da sess\xE3o\u2026",
  "search.noMatches": "Nenhuma sess\xE3o correspondente",
  "search.hasMore": "Mostrando os primeiros {n} resultados. Restrinja sua pesquisa.",
  "menu.addWorkspace": "Adicionar espa\xE7o de trabalho\u2026",
  "picker.loading": "Carregando \xE1reas de trabalho\u2026",
  "conflict.named": "J\xE1 existe um espa\xE7o de trabalho chamado \u201C{name}\u201D.",
  "folderError.title": "N\xE3o foi poss\xEDvel abrir a pasta",
  "folderError.retry": "Escolha novamente",
  "rename": "Renomear",
  "rename.workspace.title": "Renomear espa\xE7o de trabalho",
  "rename.session.title": "Renomear sess\xE3o",
  "field.workspaceName": "Nome do espa\xE7o de trabalho",
  "field.sessionName": "Nome da sess\xE3o",
  "delete.workspace": "Excluir espa\xE7o de trabalho",
  "delete.desc": "Isso remove \u201C{name}\u201D da lista de espa\xE7os de trabalho. A pasta e os logs de sess\xE3o ser\xE3o mantidos. Suas sess\xF5es aparecer\xE3o em Desagrupado.",
  "delete.pending": "Excluindo espa\xE7o de trabalho\u2026",
  "menu.fork": "Bifurcar sess\xE3o",
  "menu.archiveSession": "Sess\xE3o de arquivamento",
  "menu.unarchiveSession": "Desarquivar sess\xE3o",
  "menu.pinSession": "Fixar sess\xE3o",
  "menu.unpinSession": "Desafixar sess\xE3o",
  "menu.sessionId": "Copiar ID da sess\xE3o",
  "toast.sessionIdCopied": "ID da sess\xE3o copiado",
  "toast.sessionIdCopyFailed": "Falha na c\xF3pia. Tente novamente.",
  "row.archived": "Arquivado",
  "row.pinned": "Fixado",
  "toast.archivedNotOpenable": "As sess\xF5es arquivadas n\xE3o podem ser abertas. Desarquive-o para visualizar.",
  "toast.archived": "Sess\xE3o arquivada. Voc\xEA pode ",
  "toast.stoppedAndArchived": "Sess\xE3o interrompida e arquivada. Voc\xEA pode ",
  "archive.confirm.title": "Parar e arquivar esta sess\xE3o?",
  "archive.confirm.desc": "\u201C{title}\u201D ainda tem trabalho em andamento. O arquivamento interrompe primeiro; voc\xEA pode restaurar a sess\xE3o posteriormente a partir do filtro \u201CTodas as conversas (mostrar arquivadas)\u201D na barra lateral, e o trabalho interrompido n\xE3o ser\xE1 retomado por conta pr\xF3pria.",
  "archive.confirm.activity": "Obra que ser\xE1 interrompida",
  "archive.confirm.turn": "O turno em andamento",
  "archive.confirm.subagents.one": "{n} subagente em execu\xE7\xE3o: {names}",
  "archive.confirm.subagents.other": "{n} executando subagentes: {names}",
  "archive.confirm.jobs.one": "{n} trabalho em segundo plano: {names}",
  "archive.confirm.jobs.other": "{n} trabalhos em segundo plano: {names}",
  "archive.confirm.schedules.one": "{n} lembrete programado: {names}",
  "archive.confirm.schedules.other": "{n} lembretes programados: {names}",
  "archive.confirm.other.one": "{n} outro item de trabalho ({kind})",
  "archive.confirm.other.other": "{n} outros itens de trabalho ({kind})",
  "archive.confirm.listSeparator": ", ",
  "archive.confirm.action": "Pare e arquive",
  "archive.confirm.pending": "Parando e arquivando\u2026",
  "toast.archivedUndo": "desfazer",
  "toast.archivedOr": " ou ",
  "toast.archivedFilter": "filtrar sess\xF5es arquivadas",
  "toast.pinFailed": "N\xE3o foi poss\xEDvel fixar. Tente novamente mais tarde.",
  "toast.unpinFailed": "N\xE3o foi poss\xEDvel desafixar. Tente novamente mais tarde.",
  "toast.createFailed": "Falha na nova sess\xE3o: {message}",
  "toast.forkRequiresOpen": "Abra a sess\xE3o original para concluir a migra\xE7\xE3o antes de criar uma ramifica\xE7\xE3o.",
  "toast.openForkSource": "Abrir sess\xE3o original",
  "sessions.count.one": "{n} sess\xE3o",
  "sessions.count.other": "{n} sess\xF5es",
  "actions.workspace.aria": "A\xE7\xF5es do espa\xE7o de trabalho para {name}",
  "actions.session.aria": "A\xE7\xF5es de sess\xE3o para {name}",
  "actions.archive": "Arquivo",
  "actions.unarchive": "Desarquivar",
  "actions.pin": "Fixar",
  "actions.unpin": "Desafixar",
  "actions.newSession": "Nova sess\xE3o",
  "actions.newSession.aria": "Nova sess\xE3o em {name}",
  "status.running": "Correndo",
  "status.subagentsRunning.one": "{n} subagente em execu\xE7\xE3o",
  "status.subagentsRunning.other": "{n} subagentes em execu\xE7\xE3o",
  "status.idle": "Inativo",
  "status.waitingApproval": "Aguardando aprova\xE7\xE3o",
  "status.planReview": "Plano aguardando revis\xE3o",
  "status.waitingAnswer": "Esperando por resposta",
  "status.compact.approval": "Aprova\xE7\xE3o",
  "status.compact.planReview": "Revis\xE3o do plano",
  "status.compact.answer": "Resposta",
  "status.completed": "Conclu\xEDdo",
  "hover.created": "Criado {time}",
  "hover.copied": "Copiado",
  "date.ymd": "{y}-{m}-{d}",
  "time.now": "agora",
  "time.minutes": "{n}min",
  "time.hours": "{n}h",
  "time.days": "{n}d",
  "time.months": "{n} m\xEAs",
  "time.years": "{n}s",
  "time.ago": "{t} atr\xE1s"
};

// packages/lab-sidebar/src/client/plugin/client/index.ts
var NS = "workspace";
var inject = [
  "contextMenus",
  "slots",
  "sessions",
  "workspaces",
  "locale",
  "remote",
  "remote.directoryPicker",
  "layout",
  "shortcuts",
  "remoteAccess"
];
function apply(ctx) {
  const sessions = ctx.get("sessions");
  const workspaces = ctx.get("workspaces");
  const viewHandle = createWorkspaceViewStore();
  const viewInstance = viewHandle.create();
  const viewStore = { ...viewHandle, create: () => viewInstance };
  const rowToast = (0, import_dsh_client_store4.createSnapshotStore)(null);
  let toastSeq = 0;
  const notify = (toast) => {
    rowToast.set({ ...toast, seq: ++toastSeq });
  };
  const uiWorkspace = new UiWorkspaceService(
    ctx,
    ctx.remote.directoryPicker,
    workspaces,
    sessions,
    viewInstance.actions,
    notify
  );
  ctx.slots.provideRoot({
    hooks: { workspaces: workspaces.list },
    keyedHooks: {
      workspaceAccess: (workspaceId, action) => action === void 0 ? void 0 : ctx.remoteAccess.source("workspace", workspaceId, action)
    }
  });
  ctx.effect(() => ctx.locale.register(NS, { zh, en, ja, es, fr, de, ru, pt }), "ui-workspace: dictionaries");
  const shortcutControls = createWorkspaceShortcutControls();
  const searchSessions = async (query, signal) => {
    const result = await sessions.search(query, signal);
    if (!result.ok) throw new Error(result.error.message);
    return result.value;
  };
  const flowSource = (hole) => ({
    getSnapshot: () => ctx.slots.entries(hole).length > 0,
    subscribe: (listener) => ctx.slots.subscribe(hole, listener)
  });
  const browserFlowSource = flowSource("sidebar.workspaces.directoryFlow");
  const hostInfo = {
    getSnapshot: () => ctx.remote.$host,
    subscribe: (listener) => ctx.on("connection/reset", listener)
  };
  const pickerFlowSource = flowSource("conversation.hero.workspace.directoryFlow");
  const openSession = (sessionId) => {
    uiWorkspace.openSession(sessionId);
  };
  const pinnedSet = derive(workspaces.list, (snapshot) => new Set(snapshot.pinnedSessionIds));
  const archivedSet = derive(workspaces.list, (snapshot) => new Set(snapshot.archivedSessionIds));
  const renameRequest = derive(shortcutControls.state, (state) => state.renameTarget);
  const archiveRequest = (0, import_dsh_client_store4.createSnapshotStore)(null);
  const requestSessionRename = shortcutControls.rename;
  const unarchiveSession = (sessionId) => {
    uiWorkspace.unarchiveSession(sessionId).catch((reason) => {
      console.warn("session unarchive rejected:", reason);
    });
  };
  const renameSession = async (sessionId, title) => {
    const result = await sessions.using(
      sessionId,
      { source: "workspaceOperation" },
      (reference) => reference.binding.session.rename(title)
    );
    if (!result.ok) throw new Error(result.error.message);
  };
  const pinInjected = () => ({
    hooks: { pinned: pinnedSet, archived: archivedSet },
    // Pin failures surface as a notice: nothing else on the surface moves, so
    // a silent failure would read as a dead action.
    pinSession: (sessionId) => {
      uiWorkspace.pinSession(sessionId).catch(() => {
        notify({ kind: "pinFailed" });
      });
    },
    unpinSession: (sessionId) => {
      uiWorkspace.unpinSession(sessionId).catch(() => {
        notify({ kind: "unpinFailed" });
      });
    }
  });
  const archiveInjected = () => ({
    hooks: { archived: archivedSet },
    // Archive preserves the log and the account position, so a quiet Session
    // needs no confirmation; the notice offers undo and the archived filter.
    // The Host's refusal for running work is the one case that asks first:
    // the confirmation names that work and offers to stop it.
    archiveSession: (sessionId) => {
      uiWorkspace.archiveSession(sessionId).then(() => {
        notify({ kind: "archived", sessionId });
      }).catch((reason) => {
        const activity = activeSessionRefusal(reason);
        if (activity === void 0) {
          console.warn("session archive rejected:", reason);
          return;
        }
        const displayTitle2 = sessions.list.getSnapshot().byId[sessionId]?.displayTitle ?? sessionId;
        archiveRequest.set({ sessionId, displayTitle: displayTitle2, activity });
      });
    },
    unarchiveSession
  });
  installWorkspaceShortcuts(
    ctx,
    uiWorkspace,
    shortcutControls,
    archiveInjected().archiveSession,
    (reason) => {
      notify({ kind: "shortcutForkFailed", reason });
    }
  );
  const archiveConfirmInjected = () => ({
    hooks: { archiveRequest },
    settleSessionArchive: () => {
      archiveRequest.set(null);
    },
    stopAndArchiveSession: async (sessionId) => {
      await uiWorkspace.archiveSession(sessionId, { stopActivity: true });
      notify({ kind: "stoppedAndArchived", sessionId });
    }
  });
  const forkInjected = () => ({
    forkSession: (sessionId) => {
      uiWorkspace.forkSession(sessionId, (childId) => {
        ctx.get("productAnalytics")?.track("branch_session_click", { session_id: childId, parent_session_id: sessionId, click_position: "sidebar" });
      }, { allowMigration: false }).catch((error) => {
        if (error instanceof Error && error.name === "SessionForkError" && error.rpcError.code === "session/migration-required") {
          notify({ kind: "forkRequiresOpen", sessionId });
        }
      });
    }
  });
  const sessionIdInjected = () => ({
    copySessionId: async (sessionId) => {
      const copied = await (0, import_dsh_client_ui_primitives10.writeClipboard)(sessionId);
      notify({ kind: copied ? "sessionIdCopied" : "sessionIdCopyFailed" });
    }
  });
  const renameInjected = () => ({ requestSessionRename });
  const renameDialogInjected = () => ({
    hooks: { renameRequest },
    settleSessionRename: shortcutControls.closeRename,
    renameSession
  });
  const toastActions = {
    undoArchive: unarchiveSession,
    showArchived: () => {
      viewInstance.actions.setArchivedFilter("show");
    },
    openForkSource: (sessionId) => {
      if (workspaces.list.getSnapshot().archivedSessionIds.includes(sessionId)) {
        notify({ kind: "archivedNotOpenable" });
        return;
      }
      openSession(sessionId);
    }
  };
  registerToasts(ctx, viewStore, toastActions);
  const rowToastInjected = () => ({
    hooks: { toast: rowToast },
    dismissToast: () => {
      rowToast.set(null);
    }
  });
  const workspaceActionRequest = (0, import_dsh_client_store4.createSnapshotStore)(null);
  const requestWorkspaceAction = (workspaceId, displayTitle2, action) => {
    const workspace = workspaces.list.getSnapshot().items.find((row) => row.workspaceId === workspaceId);
    if (workspace === void 0 || !ctx.remoteAccess.source("workspace", workspaceId, `workspace/${action}`).getSnapshot()) return;
    workspaceActionRequest.set({ action, workspaceId, displayTitle: displayTitle2, storedTitle: workspace.title });
  };
  ctx.slots.inject("contextMenu.icon", function* () {
    for (const [key, Icon] of Object.entries({
      "workspace.rename": import_dsh_client_ui_primitives9.IconEditOutlineRegular,
      "workspace.delete": import_dsh_client_ui_primitives9.IconTrashOutlineRegular,
      "workspace.pin": import_dsh_client_ui_primitives9.IconPinOutlineRegular,
      "workspace.unpin": import_dsh_client_ui_primitives9.IconPinFillRegular,
      "workspace.archive": import_dsh_client_ui_primitives9.IconArchiveOutlineRegular,
      "workspace.unarchive": import_dsh_client_ui_primitives9.IconUnarchiveOutlineRegular,
      "workspace.fork": import_dsh_client_ui_primitives9.IconBranchOutlineRegular,
      "workspace.copy": import_dsh_client_ui_primitives9.IconCopyOutlineRegular
    })) yield ctx.slots.register({ name: "contextMenu.icon", key }, Icon);
  });
  ctx.effect(() => ctx.contextMenus.register({
    id: "workspace.rename",
    target: "workspace",
    order: 100,
    resolve: ({ workspaceId, displayTitle: displayTitle2 }) => ctx.remoteAccess.source("workspace", workspaceId, "workspace/rename").getSnapshot() ? [{ id: "rename", label: ctx.locale.bind(NS)("rename"), icon: { key: "workspace.rename" }, run: () => {
      requestWorkspaceAction(workspaceId, displayTitle2, "rename");
    } }] : []
  }), "workspace: rename menu action");
  ctx.effect(() => ctx.contextMenus.register({
    id: "workspace.delete",
    target: "workspace",
    order: 300,
    resolve: ({ workspaceId, displayTitle: displayTitle2 }) => ctx.remoteAccess.source("workspace", workspaceId, "workspace/delete").getSnapshot() ? [{
      id: "delete",
      label: ctx.locale.bind(NS)("delete.workspace"),
      icon: { key: "workspace.delete" },
      danger: true,
      separatorBefore: true,
      run: () => {
        requestWorkspaceAction(workspaceId, displayTitle2, "delete");
      }
    }] : []
  }), "workspace: delete menu action");
  const browserInjected = () => ({
    openWorkspaceMenu: (workspaceId, path, displayTitle2, point, mode) => {
      const target = ctx.contextMenus.active.getSnapshot();
      if (mode === "toggle" && target?.kind === "workspace" && target.value.workspaceId === workspaceId) ctx.contextMenus.close();
      else ctx.contextMenus.open({ kind: "workspace", value: { workspaceId, path, displayTitle: displayTitle2 } }, point);
    },
    settleWorkspaceAction: () => {
      workspaceActionRequest.set(null);
    },
    openSessionMenu: (sessionId, displayTitle2, point, mode) => {
      const target = ctx.contextMenus.active.getSnapshot();
      if (mode === "toggle" && target?.kind === "session" && target.value.sessionId === sessionId) ctx.contextMenus.close();
      else ctx.contextMenus.open({ kind: "session", value: { sessionId, displayTitle: displayTitle2 } }, point);
    },
    // Explicit group actions keep their target; unscoped New Session inherits
    // the current Session Workspace before the recent-Workspace fallback.
    startSession: (workspaceId, options) => {
      uiWorkspace.startSession(workspaceId, options);
    },
    open: openSession,
    searchSessions,
    searchResultLimit: sessions.searchResultLimit,
    requestSessionRename,
    notifyArchivedNotOpenable: () => {
      notify({ kind: "archivedNotOpenable" });
    },
    renameWorkspace: async (workspaceId, title) => {
      await workspaces.rename(workspaceId, title);
    },
    deleteWorkspace: async (workspaceId) => {
      await workspaces.delete(workspaceId);
    },
    insertWorkspaceBefore: async (workspaceId, beforeWorkspaceId) => {
      await workspaces.insertBefore(workspaceId, beforeWorkspaceId);
    },
    unarchiveSession: async (sessionId) => {
      await uiWorkspace.unarchiveSession(sessionId);
    },
    createWorkspace: (input) => workspaces.create(input),
    requestSearch: shortcutControls.search,
    requestAddWorkspace: shortcutControls.add,
    closeAddWorkspace: shortcutControls.closeAdd,
    setDirectoryBusy: shortcutControls.directoryBusy,
    hooks: {
      workspaceActionRequest,
      contextMenuTarget: ctx.contextMenus.active,
      directoryFlow: browserFlowSource,
      hostInfo,
      workspaceShortcuts: shortcutControls.state,
      shortcuts: ctx.shortcuts.catalog
    }
  });
  const pickerInjected = () => ({
    createWorkspace: (input) => workspaces.create(input),
    hooks: { directoryFlow: pickerFlowSource }
  });
  ctx.slots.inject("sidebar.workspaces", () => ctx.slots.register(
    {
      name: "sidebar.workspaces",
      children: {
        "sidebar.workspaces.directoryFlow": { kind: "single", scope: "root" },
        "sidebar.workspaces.session.row.action": { kind: "list", scope: "root" },
        "sidebar.session.row.leading": { kind: "list", scope: "root", inline: true },
        "sidebar.session.row.trailing": { kind: "list", scope: "root", inline: true },
        "sidebar.session.row.hover": { kind: "list", scope: "root" }
      },
      store: viewStore,
      inject: browserInjected,
      locale: NS
    },
    WorkspaceBrowser
  ));
  ctx.slots.inject("contextMenu.content", () => ctx.slots.register({
    name: "contextMenu.content",
    key: "session",
    children: { "sidebar.workspaces.session.menu.item": {
      kind: "list",
      scope: "root",
      inject: { hooks: { menuOpenState: menuOpenStateFactory, shortcuts: ctx.shortcuts.catalog } }
    } }
  }, SessionMenu));
  registerSessionMenus(ctx, {
    ...pinInjected(),
    ...archiveInjected(),
    ...renameInjected(),
    ...forkInjected(),
    ...sessionIdInjected()
  });
  ctx.slots.inject("sidebar.workspaces.session.row.action", function* () {
    yield ctx.slots.register({ name: "sidebar.workspaces.session.row.action", id: "archive", order: 100, locale: NS, inject: archiveInjected }, ArchiveSessionRowButton);
    yield ctx.slots.register({ name: "sidebar.workspaces.session.row.action", id: "pin", order: 200, locale: NS, inject: pinInjected }, PinSessionRowButton);
  });
  ctx.slots.inject("shell.overlay", function* () {
    yield ctx.slots.register({
      name: "shell.overlay",
      id: "workspace.session-rename",
      locale: NS,
      inject: renameDialogInjected
    }, SessionRenameDialog);
    yield ctx.slots.register({
      name: "shell.overlay",
      id: "workspace.session-archive",
      locale: NS,
      inject: archiveConfirmInjected
    }, SessionArchiveConfirmDialog);
    yield ctx.slots.register({
      name: "shell.overlay",
      id: "workspace.row-toast",
      inject: rowToastInjected,
      children: { "workspace.toast": { kind: "keyed", scope: "root" } }
    }, RowActionToast);
  });
  ctx.slots.inject("conversation.hero.workspace", () => ctx.slots.register(
    {
      name: "conversation.hero.workspace",
      children: { "conversation.hero.workspace.directoryFlow": { kind: "single", scope: "root" } },
      inject: pickerInjected,
      locale: NS
    },
    WorkspacePicker
  ));
}
function activeSessionRefusal(reason) {
  if (!(reason instanceof Error) || reason.name !== "WorkspaceArchiveError") return void 0;
  const { rpcError } = reason;
  return rpcError.code === "workspace/session-active" ? rpcError.details.activity : void 0;
}

// packages/lab-sidebar/src/client/index.tsx
var inject2 = inject;
function apply2(ctx) {
  try {
    if (typeof document !== "undefined" && __LAB_CSS__ !== void 0 && __LAB_CSS__ !== "") {
      const style = document.createElement("style");
      style.setAttribute("data-plugin-css", "dsh-lab-sidebar");
      style.textContent = __LAB_CSS__;
      document.head.appendChild(style);
    }
    apply(ctx);
  } catch (error) {
    console.error("[lab-sidebar] failed to activate the workspace copy", error);
  }
}

    return module.exports;
  },
});
