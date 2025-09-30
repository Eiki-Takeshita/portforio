// プロジェクトデータの配列
// 各プロジェクトオブジェクトは以下のプロパティを持つ：
//   title: プロジェクトのタイトル
//   description: プロジェクトの短い説明
//   technologies: 使用した技術の配列
//   outcomes: プロジェクトの成果の配列
export const projectsData = [
    {
        title: "コンベア管理システム",
        description: "工場向けのコンベアシステムの設計と実装",
        technologies: ["PLC(keyence KV8000)", "Python"],
        outcomes: ["生産レーンの省人化", "生産性向上", "リアルタイムデータの可視化", "障害対応の簡易化"]
    },
    {
        title: "RFID在庫管理システム",
        description: "RFIDを用いた自動在庫管理システムの開発",
        technologies: ["PLC", "RFID技術", "Python", "Flask", "MySQL"],
        outcomes: ["正確な入出庫管理", "在庫のリアルタイム可視化", "PLCと連携したコンベアの自動化"]
    }
];