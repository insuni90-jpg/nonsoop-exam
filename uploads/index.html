const DESIGN_WIDTH = 1920;

const exam = document.querySelector("#exam");
const readingArea = document.querySelector("#readingArea");
const readingBody = document.querySelector("#readingBody");
const memoUtility = document.querySelector("#memoUtility");
const memoCount = document.querySelector("#memoCount");
const memoPanel = document.querySelector("#memoPanel");
const memoPanelCount = document.querySelector(".memo-panel-title strong");
const memoList = document.querySelector(".memo-list");
const memoPopover = document.querySelector("#memoPopover");
const memoPassage = document.querySelector("#memoPassage");
const memoExcerpt = document.querySelector("#memoExcerpt");
const memoInput = document.querySelector("#memoInput");
const memoCancel = document.querySelector("#memoCancel");
const memoSave = document.querySelector("#memoSave");
const floatingMenu = document.querySelector("#floatingMenu");
const floatingMemo = document.querySelector("#floatingMemo");

let selectedRange = null;
let selectedEntryId = null;
let selectionIsValid = false;
let entrySequence = 1;
let pendingEntry = null;
let activeEntryId = null;
const entries = [];

function fitPrototype() {
  exam.style.transform = "none";
}

function inferPassageLabel(node) {
  let paragraph = node.nodeType === Node.ELEMENT_NODE ? node.closest("p") : node.parentElement?.closest("p");
  while (paragraph) {
    const match = paragraph.textContent.trim().match(/^\(([가-힣])\)/);
    if (match) return `제시문 (${match[1]})`;
    paragraph = paragraph.previousElementSibling;
  }
  return "제시문";
}

function initializeEntries() {
  for (const mark of readingBody.querySelectorAll("mark.highlight-anchor")) {
    entries.push({
      id: mark.dataset.highlightId,
      passage: inferPassageLabel(mark),
      excerpt: mark.textContent.trim().replace(/\s+/g, " "),
      content: mark.dataset.memoContent || "",
    });
  }
}

function createAction(label, action, id, extraClass = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `memo-action ${extraClass}`.trim();
  button.dataset.memoAction = action;
  button.dataset.entryId = id;
  button.textContent = label;
  return button;
}

function renderMemoList() {
  memoList.replaceChildren();
  if (entries.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "저장한 메모가 없습니다.";
    memoList.append(empty);
    return;
  }

  for (const entry of entries) {
    const card = document.createElement("article");
    card.className = `memo-card${entry.content ? " has-content" : ""}`;
    card.setAttribute("role", "listitem");
    card.dataset.entryId = entry.id;

    const top = document.createElement("div");
    top.className = "memo-card-top";

    const jump = document.createElement("button");
    jump.type = "button";
    jump.className = "memo-card-jump";
    jump.dataset.entryJump = entry.id;
    jump.setAttribute("aria-label", `${entry.passage} 원문으로 이동`);

    const excerpt = document.createElement("span");
    excerpt.className = "memo-card-excerpt";
    excerpt.textContent = `“${entry.excerpt}”`;
    jump.append(excerpt);

    if (entry.content) {
      const content = document.createElement("span");
      content.className = "memo-card-content";
      content.textContent = entry.content;
      jump.append(content);
    }

    const actions = document.createElement("div");
    actions.className = "memo-card-actions";
    if (entry.content) actions.append(createAction("편집", "edit", entry.id));
    actions.append(createAction("삭제", "delete", entry.id, "delete"));

    top.append(jump, actions);
    card.append(top);
    memoList.append(card);
  }
}

function updateMemoCount() {
  const count = entries.length;
  memoCount.textContent = String(count);
  memoCount.hidden = count === 0;
  memoPanelCount.textContent = `(${count})`;
  renderMemoList();
}

function setMemoPanel(open) {
  memoPanel.hidden = !open;
  memoUtility.setAttribute("aria-expanded", String(open));
  memoUtility.setAttribute("aria-label", open ? "메모 목록 닫기" : "메모 목록 열기");
  if (open) closeMemoPopover();
  hideFloatingMenu();
}

function unwrapHighlight(mark) {
  const parent = mark.parentNode;
  while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
  mark.remove();
  parent.normalize();
}

function deleteEntry(id) {
  const index = entries.findIndex(entry => entry.id === id);
  if (index === -1) return;
  const mark = readingBody.querySelector(`mark[data-highlight-id="${CSS.escape(id)}"]`);
  if (mark) unwrapHighlight(mark);
  entries.splice(index, 1);
  if (activeEntryId === id) closeMemoPopover();
  updateMemoCount();
}

function jumpToEntry(id) {
  const target = readingBody.querySelector(`mark[data-highlight-id="${CSS.escape(id)}"]`);
  if (!target) return;
  setMemoPanel(false);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    readingBody.focus({ preventScroll: true });
    window.setTimeout(() => {
      target.classList.add("is-located");
      window.setTimeout(() => target.classList.remove("is-located"), 1600);
    }, 220);
  }));
}

function getRangeAnchorRect(range) {
  const rects = Array.from(range.getClientRects());
  return rects.at(-1) || range.getBoundingClientRect();
}

function positionMemoPopover(anchorRect) {
  const areaRect = readingArea.getBoundingClientRect();
  const examRect = exam.getBoundingClientRect();
  const scale = examRect.width / DESIGN_WIDTH;
  const popoverWidth = memoPopover.offsetWidth;
  const popoverHeight = memoPopover.offsetHeight;
  const anchorLeft = (anchorRect.left - areaRect.left) / scale;
  const anchorRight = (anchorRect.right - areaRect.left) / scale;
  const anchorTop = (anchorRect.top - areaRect.top) / scale;
  const anchorBottom = (anchorRect.bottom - areaRect.top) / scale;

  let left = anchorRight + 8;
  if (left + popoverWidth > 820) left = anchorLeft - popoverWidth - 8;
  left = Math.max(20, Math.min(820 - popoverWidth, left));

  let top = anchorBottom + 8;
  if (top + popoverHeight > 739) top = anchorTop - popoverHeight - 8;
  top = Math.max(58, Math.min(739 - popoverHeight, top));
  memoPopover.style.left = `${left}px`;
  memoPopover.style.top = `${top}px`;
}

function openMemoPopover({ entry = null, anchorRect }) {
  activeEntryId = entry?.id || null;
  memoPassage.textContent = entry?.passage || pendingEntry.passage;
  memoExcerpt.textContent = `“${entry?.excerpt || pendingEntry.excerpt}”`;
  memoInput.value = entry?.content || "";
  memoSave.disabled = false;
  memoPopover.hidden = false;
  memoPopover.dataset.mode = entry ? "edit" : "create";
  positionMemoPopover(anchorRect);
  memoInput.focus({ preventScroll: true });
}

function closeMemoPopover() {
  memoPopover.hidden = true;
  memoPopover.removeAttribute("data-mode");
  memoInput.value = "";
  memoSave.disabled = false;
  activeEntryId = null;
  pendingEntry = null;
}

function closestHighlight(node) {
  const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
  return element?.closest("mark.highlight-anchor") || null;
}

function openCreateMemo() {
  if (!selectionIsValid || !selectedRange) return;
  const range = selectedRange.cloneRange();
  pendingEntry = {
    range,
    existingEntryId: selectedEntryId,
    excerpt: range.toString().trim().replace(/\s+/g, " "),
    passage: inferPassageLabel(range.startContainer),
    anchorRect: getRangeAnchorRect(range),
  };
  window.getSelection()?.removeAllRanges();
  hideFloatingMenu();
  openMemoPopover({ anchorRect: pendingEntry.anchorRect });
}

function openMemoEdit(id, anchor) {
  const entry = entries.find(item => item.id === id);
  if (!entry || !entry.content) return;
  pendingEntry = null;
  openMemoPopover({ entry, anchorRect: anchor.getBoundingClientRect() });
}

function createHighlightFromRange(range, id) {
  const mark = document.createElement("mark");
  mark.className = "highlight-anchor";
  mark.id = id;
  mark.dataset.highlightId = id;
  mark.append(range.extractContents());
  range.insertNode(mark);
  mark.parentNode.normalize();
  return mark;
}

function saveMemoPopover() {
  const content = memoInput.value.trim();

  if (activeEntryId) {
    const entry = entries.find(item => item.id === activeEntryId);
    if (entry) entry.content = content;
  } else if (pendingEntry?.existingEntryId) {
    const entry = entries.find(item => item.id === pendingEntry.existingEntryId);
    if (entry) entry.content = content;
  } else if (pendingEntry?.range) {
    const id = `memo-highlight-${entrySequence++}`;
    createHighlightFromRange(pendingEntry.range, id);
    entries.push({
      id,
      passage: pendingEntry.passage,
      excerpt: pendingEntry.excerpt,
      content,
    });
  }

  closeMemoPopover();
  updateMemoCount();
}

function rangeIsInsideReadingBody(range) {
  return readingBody.contains(range.commonAncestorContainer);
}

function showFloatingMenu(range) {
  const startMark = closestHighlight(range.startContainer);
  const endMark = closestHighlight(range.endContainer);
  selectedEntryId = startMark && startMark === endMark ? startMark.dataset.highlightId : null;

  const startParagraph = range.startContainer.nodeType === Node.ELEMENT_NODE ? range.startContainer.closest("p") : range.startContainer.parentElement?.closest("p");
  const endParagraph = range.endContainer.nodeType === Node.ELEMENT_NODE ? range.endContainer.closest("p") : range.endContainer.parentElement?.closest("p");
  selectionIsValid = Boolean(selectedEntryId || (startParagraph && startParagraph === endParagraph && !startMark && !endMark));

  floatingMenu.classList.toggle("is-disabled", !selectionIsValid);
  floatingMemo.setAttribute("aria-disabled", String(!selectionIsValid));

  const selectionRect = range.getBoundingClientRect();
  const examRect = exam.getBoundingClientRect();
  const scale = examRect.width / DESIGN_WIDTH;
  floatingMenu.hidden = false;

  const menuWidth = floatingMenu.offsetWidth;
  const designX = (selectionRect.left - examRect.left) / scale + selectionRect.width / (2 * scale) - menuWidth / 2;
  const designY = (selectionRect.top - examRect.top) / scale - 38;
  floatingMenu.style.left = `${Math.max(30, Math.min(870 - menuWidth, designX))}px`;
  floatingMenu.style.top = `${Math.max(282, designY)}px`;
}

function hideFloatingMenu() {
  floatingMenu.hidden = true;
  selectedRange = null;
  selectedEntryId = null;
  selectionIsValid = false;
}

function captureSelection() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
    hideFloatingMenu();
    return;
  }

  const range = selection.getRangeAt(0);
  if (!rangeIsInsideReadingBody(range) || range.toString().trim().length === 0) {
    hideFloatingMenu();
    return;
  }

  selectedRange = range.cloneRange();
  showFloatingMenu(selectedRange);
}

memoUtility.addEventListener("click", () => {
  setMemoPanel(memoUtility.getAttribute("aria-expanded") !== "true");
});

memoList.addEventListener("click", event => {
  const actionButton = event.target.closest("[data-memo-action]");
  if (actionButton) {
    event.stopPropagation();
    const { memoAction, entryId } = actionButton.dataset;
    if (memoAction === "delete") deleteEntry(entryId);
    if (memoAction === "edit") openMemoEdit(entryId, actionButton);
    return;
  }

  const jumpButton = event.target.closest("[data-entry-jump]");
  if (jumpButton) jumpToEntry(jumpButton.dataset.entryJump);
});

readingBody.addEventListener("mouseup", () => requestAnimationFrame(captureSelection));
readingBody.addEventListener("keyup", () => requestAnimationFrame(captureSelection));
readingBody.addEventListener("scroll", hideFloatingMenu, { passive: true });

floatingMemo.addEventListener("mousedown", event => event.preventDefault());
floatingMemo.addEventListener("click", openCreateMemo);
memoCancel.addEventListener("click", closeMemoPopover);
memoSave.addEventListener("click", saveMemoPopover);

document.addEventListener("mousedown", event => {
  if (!floatingMenu.contains(event.target) && !readingBody.contains(event.target)) hideFloatingMenu();
  if (!memoPopover.hidden && !memoPopover.contains(event.target) && !event.target.closest("[data-memo-action='edit']") && !floatingMemo.contains(event.target)) {
    closeMemoPopover();
  }
});

window.addEventListener("resize", () => {
  fitPrototype();
  hideFloatingMenu();
});

initializeEntries();
updateMemoCount();
fitPrototype();
