// Components.d.ts — the complete catalog of the 16 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Button) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Button" (node 4677:185162)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  leftIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  rightIcon?: React.ReactNode;
  type?: "primary" | "secondary" | "ghost" | "danger" | "text" | "underline";
  showRightIcon?: boolean;
  showLeftIcon?: boolean;
  state?: "default" | "hover" | "pressed" | "disabled" | "focus";
  /** Text content; defaults to "Small Button". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "자동저장" (node 4887:1697)
export interface Component2Props {
  className?: string;
  style?: React.CSSProperties;
  leftIcon?: boolean;
  state?: "default" | "ing" | "saved" | "error";
  rightIcon?: boolean;
  /** Text content; defaults to "09 : 57 : 00 자동저장". */
  text1?: string;
}

// figma layer: "응시중_Default" (node 4912:6697)
export interface DefaultProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Action/Minus" (node 4788:120)
export interface IconActionMinusProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Action/Pen" (node 4788:122)
export interface IconActionPenProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Action/Plus" (node 4725:48966)
export interface IconActionPlusProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Action/Rotate-cw" (node 4788:130)
export interface IconActionRotateCwProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Action/Sticky-note" (node 4788:124)
export interface IconActionStickyNoteProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon Button" (node 4858:194)
export interface IconButtonProps {
  className?: string;
  style?: React.CSSProperties;
  showNumber?: boolean;
  state?: "default" | "hover" | "pressed" | "disabled";
  instance?: React.ReactNode;
  text?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Icon/Custom/Clock" (node 4468:154830)
export interface IconCustomClockProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/General/Message_square_more" (node 4468:154482)
export interface IconGeneralMessageSquareMoreProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Navigation/Expand_down" (node 4468:154440)
export interface IconNavigationExpandDownProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Manuscrpt cell" (node 4858:221)
export interface ManuscrptCellProps {
  className?: string;
  style?: React.CSSProperties;
  text?: boolean;
  state?: "empty" | "filled" | "focus" | "over-limit";
  /** Text content; defaults to "가". */
  text1?: string;
}

// figma layer: "Memo list" (node 4887:1714)
export interface MemoListProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "memo_default" | "memo_edit" | "memo_x";
  /** Text content; defaults to "“예절을 높이고 착한 것을 밝혀서 사나운 마음과 쟁탈하는 기운을 이겨내도록 가르쳤다.”". */
  text1?: string;
  /** Text content; defaults to "개인 자유 최우선 → (나)의 공동체 우선 관점과 대조해서 쓸 것". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Reading Area" (node 4887:1747)
export interface ReadingAreaProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "open";
  /** Text content; defaults to "<제시문>". */
  text1?: string;
  /** Text content; defaults to "100%". */
  text2?: string;
  /** Text content; defaults to "(가) 인간은 스스로 판단하고 선택할 때 비로소 자신의 삶의 주인이 된다. 타인에게 해를 끼치지 않는 한, 개인의 사상과 행동은 어떠한 간섭으로부터도 자유로워야 한다. 사회가 개인의 선택을 대신해 주려는 순간, 그 사회는 구성원을 성숙한 인격체가 아니라 보호와 교정의 대상으로 격하시킨다. 다수가 옳다고 믿는 관행이라 할지라도 그것이 개인에게 강제되는 순간 진리를 향한 토론의 가능성은 닫히고 만다.\n개별성의 발휘야말로 사회가 진보하는 유일한 원천이다. 관습이 명하는 대로만 사는 사람은 선택이라는 인간 고유의 능력을 사용하지 않는 것이며, 그러한 삶이 아무리 안전해 보일지라도 그것은 모방이지 삶이 아니다. 따라서 좋은 사회란 서로 다른 삶의 실험이 최대한 허용되는 사회이다.\n\n(나) 개인은 홀로 존재하지 않는다. 우리가 무엇을 원하고 무엇을 옳다고 여기는지조차 공동체가 물려준 언어와 서사 속에서 형성된다. 자아는 공동체에 앞서 완성된 채로 주어지는 것이 아니라, 가족과 이웃, 동료 시민과 맺는 관계 속에서 비로소 구성된다. 따라서 공동체의 요청으로부터 완전히 분리된 '무연고적 자아'란 철학적 허구에 지나지 않는다.\n권리의 언어만으로는 좋은 삶을 설명할 수 없다. 시민적 덕성, 곧 공동선에 대한 헌신과 서로에 대한 책임이 뒷받침되지 않는 자유는 고립과 무관심으로 귀결된다. 공동체가 개인에게 부과하는 의무는 자유의 제약이 아니라, 개인이 의미 있는 삶을 살아가기 위한 조건이다.\n\n(다) A시는 도심의 오래된 골목 상권이 관광지로 알려지면서 소음과 쓰레기 문제로 몸살을 앓자, 주민 투표를 거쳐 야간 영업시간을 제한하는 조례를 제정하였다. 상인 일부는 \"영업의 자유에 대한 과도한 침해\"라며 반발했지만, 다수 주민은 \"마을의 삶을 지키기 위한 최소한의 약속\"이라며 찬성하였다. 조례 시행 후 관광객은 줄었으나 주민 만족도는 크게 높아졌고, 일부 상인은 매출 감소를 이유로 조례 폐지를 청구하는 소송을 제기하였다.\n\n(라) 인간은 스스로 판단하고 선택할 때 비로소 자신의 삶의 주인이 된다. 타인에게 해를 끼치지 않는 한, 개인의 사상과 행동은 어떠한 간섭으로부터도 자유로워야 한다. 사회가 개인의 선택을 대신해 주려는 순간, 그 사회는 구성원을 성숙한 인격체가 아니라 보호와 교정의 대상으로 격하시킨다. 다수가 옳다고 믿는 관행이라 할지라도 그것이 개인에게 강제되는 순간 진리를 향한 토론의 가능성은 닫히고 만다.\n개별성의 발휘야말로 사회가 진보하는 유일한 원천이다. 관습이 명하는 대로만 사는 사람은 선택이라는 인간 고유의 능력을 사용하지 않는 것이며, 그러한 삶이 아무리 안전해 보일지라도 그것은 모방이지 삶이 아니다. 따라서 좋은 사회란 서로 다른 삶의 실험이 최대한 허용되는 사회이다.". */
  text3?: string;
}

// figma layer: "Text_Nav" (node 4858:237)
export interface TextNavProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "pressed";
  /** Text content; defaults to "문제 1-1". */
  text1?: string;
}

declare const Button: React.FC<ButtonProps>;
declare const Component2: React.FC<Component2Props>;
declare const Default: React.FC<DefaultProps>;
declare const IconActionMinus: React.FC<IconActionMinusProps>;
declare const IconActionPen: React.FC<IconActionPenProps>;
declare const IconActionPlus: React.FC<IconActionPlusProps>;
declare const IconActionRotateCw: React.FC<IconActionRotateCwProps>;
declare const IconActionStickyNote: React.FC<IconActionStickyNoteProps>;
declare const IconButton: React.FC<IconButtonProps>;
declare const IconCustomClock: React.FC<IconCustomClockProps>;
declare const IconGeneralMessageSquareMore: React.FC<IconGeneralMessageSquareMoreProps>;
declare const IconNavigationExpandDown: React.FC<IconNavigationExpandDownProps>;
declare const ManuscrptCell: React.FC<ManuscrptCellProps>;
declare const MemoList: React.FC<MemoListProps>;
declare const ReadingArea: React.FC<ReadingAreaProps>;
declare const TextNav: React.FC<TextNavProps>;
declare global {
  interface Window {
    Button: React.FC<ButtonProps>;
    Component2: React.FC<Component2Props>;
    Default: React.FC<DefaultProps>;
    IconActionMinus: React.FC<IconActionMinusProps>;
    IconActionPen: React.FC<IconActionPenProps>;
    IconActionPlus: React.FC<IconActionPlusProps>;
    IconActionRotateCw: React.FC<IconActionRotateCwProps>;
    IconActionStickyNote: React.FC<IconActionStickyNoteProps>;
    IconButton: React.FC<IconButtonProps>;
    IconCustomClock: React.FC<IconCustomClockProps>;
    IconGeneralMessageSquareMore: React.FC<IconGeneralMessageSquareMoreProps>;
    IconNavigationExpandDown: React.FC<IconNavigationExpandDownProps>;
    ManuscrptCell: React.FC<ManuscrptCellProps>;
    MemoList: React.FC<MemoListProps>;
    ReadingArea: React.FC<ReadingAreaProps>;
    TextNav: React.FC<TextNavProps>;
  }
}
