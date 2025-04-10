// linked list view of projects
import { useState, useEffect } from 'react'
import ProjectCard from '../components/project_card' 
import {LinkedList} from '../view_structures/classes.js'
import "./structures.css";

export default function LinkedListView({projects}) {
  const [data, setData] = useState(null)
  const [cur_node, setCurNode] = useState(null)
  const [index, setIndex] = useState(0)

  const nextNode = () => {
    setCurNode(cur_node.next)
    setIndex(index + 1)
  }

  const prevNode = () => {
    setCurNode(cur_node.prev)
    setIndex(index - 1)
  }

  useEffect(() => {
    if (projects && projects.length > 0) {
      const list = new LinkedList(projects)
      setData(list)
      setCurNode(list.head)
      setIndex(0)
    }
  }, [projects])

  if (!data) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div className='nodes'>
        {Array.from({length: data.length}).map((_, i) => (
          i == data.length - 1 ? (
            <>
              <span className={`node-visual ${i == index ? 'cur-index' : ''}`}></span>
            </>
          ) : (
            <>
              <span className={`node-visual ${i == index ? 'cur-index' : ''}`}></span>
              {'-'}
            </>
            )
        ))}
      </div>
      <div className="all-projects-linkedlist">
        {cur_node.prev && (
          <div className='node-switch-button'>
            <span className='switch-button' onClick={() => prevNode()}>PREVIOUS</span>
          </div>
        )}
        {!cur_node.prev && (
          <div className='node-switch-button'></div>
        )}
        <div className='project-column'>
          {index == 0 && (
            <p className='node-text'>HEAD</p>
          )}
          {index == data.length - 1 && (
            <p className='node-text'>TAIL</p>
          )}
          <ProjectCard project={cur_node.value} />
        </div>
        {cur_node.next && (
          <div className='node-switch-button'>
            <span className='switch-button' onClick={() => nextNode()} >NEXT</span>
          </div>
        )}
        {!cur_node.next && (
          <div className='node-switch-button'></div>
        )}
      </div>
    </div>
  )
}
