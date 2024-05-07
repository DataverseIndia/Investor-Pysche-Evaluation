import { FC } from 'react';

interface CompetencyLevelProps {
    competencyData: {
        competency: string;
        competencyLevel: string;
        competencyScore: number;
        gapForNextLevel: number;
    }[];
}

const CompetencyLevelTable: FC<CompetencyLevelProps> = ({ competencyData }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Competency Level</h2>
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Competency</th>
                            <th className="px-4 py-2">Level</th>
                            <th className="px-4 py-2">Score</th>
                            <th className="px-4 py-2">Gap for Next Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {competencyData.map((data, index) => (
                            <tr
                                key={index}
                                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                            >
                                <td className="px-4 py-2 border">{data.competency}</td>
                                <td className="px-4 py-2 border">{data.competencyLevel}</td>
                                <td className="px-4 py-2 border">{data.competencyScore}%</td>
                                <td className="px-4 py-2 border">{data.gapForNextLevel}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompetencyLevelTable;
