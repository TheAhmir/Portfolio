'use client'
import { getPythonSkills, getRSkills } from '@/lib/client';
import './skills.css';

export default async function Skills() {

    const pythonSkills = await getPythonSkills();
    const {
        other: python_other,
        analysis: python_analysis,
        visualization: python_visualization
      } = pythonSkills || {};

    const rSkills = await getRSkills();
    const {
        other: r_other,
        analysis: r_analysis,
        visualization: r_visualization
      } = rSkills || {};
 
    if (!pythonSkills || !rSkills) {
        return (
            <div>Loading...</div>
        )
    }


    return (
        <div className="page">
            <h1>Primary Skills</h1>
            <div className="multi-col">
                <div className='section'>
                    {pythonSkills && (<h2 className='section-title'>{pythonSkills.title}</h2>)}
                    {python_other && python_other.length != 0 && (
                            <div className='column'>
                                {python_other.map((skill, index) => (
                                        <p key={index}>• {skill}</p>
                                ))}
                            </div>

                            
                        )}

                    <div className="column">
                        {python_analysis && python_analysis.length != 0 && (
                            <>
                                <p className='sub-section'>Analysis:</p>
                                <div className='indent'>
                                {python_analysis.map((skill, index) => (
                                        <p key={index}>• {skill}</p>
                                ))}
                                </div>
                            </>

                            
                        )}

                        {python_visualization && python_visualization.length != 0 (
                            <>
                                <p className='sub-section'>Visualization:</p>
                                <div className='indent'>
                                {python_visualization.map((skill, index) => (
                                        <p key={index}>• {skill}</p>
                                ))}
                                </div>
                            </>
                            
                        )}
                    </div>
                </div>

                <div className='section'>
                {rSkills && (<h2 className='section-title'>{rSkills.title}</h2>)}
                    <div className="column">
                    {r_analysis && r_analysis.length != 0 && (
                            <>
                                <p className='sub-section'>Analysis:</p>
                                <div className='indent'>
                                {r_analysis.map((skill, index) => (
                                        <p key={index}>• {skill}</p>
                                ))}
                                </div>
                            </>

                            
                        )}

                        {r_visualization && r_visualization.length != 0 (
                            <>
                                <p className='sub-section'>Visualization:</p>
                                <div className='indent'>
                                {r_visualization.map((skill, index) => (
                                        <p key={index}>• {skill}</p>
                                ))}
                                </div>
                            </>
                            
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}