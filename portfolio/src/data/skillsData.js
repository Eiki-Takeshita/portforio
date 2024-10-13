import { Monitor, Cpu, Database, Code } from 'lucide-react';

// スキルデータの配列
// 各スキルオブジェクトは以下のプロパティを持つ：
//   icon: スキルを表すアイコンコンポーネント（Lucide Reactから）
//   title: スキルのタイトル
//   description: スキルの短い説明
//   details: スキルの詳細情報の配列
export const skillsData = [
    {
        icon: Monitor,
        title: 'PLC Systems',
        description: 'PLCプログラミングと自動化システムの設計',
        details: [
        'PLC（三菱/OMRON/Keyence）',
        'ST言語',
        'CODESYS',
        '表示機器（HMI）デザイン',
        ]
    },
    {
        icon: Cpu,
        title: 'RFID Integration',
        description: 'RFIDを用いた効率的な在庫管理システムの構築',
        details: [
        'UHF/HF RFID',
        'MASPRO RFID',
        'RFID middleware',
        ]
    },
    {
        icon: Database,
        title: 'Data Management',
        description: '工場データの収集、分析、可視化ソリューション',
        details: [
        'SQL databases',
        'OPC UA',
        'MQTT',
        'データの可視化',
        ]
    },
    {
        icon: Code,
        title: 'System Development',
        description: '自動化システムや管理ツールの開発',
        details: [
        'Python',
        'Flask',
        'Golang',
        'Docker',
        'CI/CD',
        'Git',
        ]
    }
];