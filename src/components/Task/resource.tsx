
import { Row, Column, Container } from '@src/components/Base/StyledComponent';
import Popup from '../Popup';
import { useTaskContext } from './taskManger';
import { useState } from 'react';

interface Resource {
  value: string
}

export default function Resource() {
  let [addTexts, setAddTexts] = useState<string>()

  let { popup, setPopup, tasks, setTasks } = useTaskContext()

  let inputRef: HTMLInputElement;

  const renderPopContent = (
    <>
      <Column width="378px" crossAxis="stretch">
        <p>(separate multiple resources name with commas.)</p> 
        <input type="text" ref={ref => inputRef = ref} onChange={e => setAddTexts(e.target.value)}/>
        <Row>
          <Container mg="0 6px">
            <button onClick={onAdd}>add</button>
          </Container>
          <Container mg="0 6px">
            <button onClick={onClear}>clear</button>
          </Container>
        </Row>
      </Column>
    </>
  )

  const TaskItem = ({ value }: Resource) => (
    <>
      <button onClick={() => onDelete(value)}>x</button>
      <span>{value}</span>
    </>
  )

  function onDelete(v: string) {
    alert('Please make sure what you are doing!')
    let _deleteIndex: number = tasks.findIndex(task => task === v)
    tasks.splice(_deleteIndex, 1)
    setTasks(tasks.concat([]))
  }

  function onAdd() {
    if(addTexts) {
      let textArr: Set<string> = new Set(addTexts.split(',').concat(tasks))
      let _nexTasks: string[] = Array.from(textArr)
      if(_nexTasks.length === tasks.length) {
        alert('Maybe you add some same resources,please check add retry again!')
      } else {
        setPopup(false)
        setTasks(Array.from(textArr))
        setAddTexts('')
        inputRef.value = ''
      }
    }
  }

  function onClear() {
    inputRef.value = ''
    setAddTexts('')
  }

  return (
    <Row>
      <Popup popContent={renderPopContent}>
        <span onClick={() => setPopup(!popup)}>+ Specify Resources</span>
      </Popup>
      <span>| Resources: </span>
      {
        tasks.length === 0
        ? <span>--</span>
        : tasks.map(v => <TaskItem key={v} value={v}/>)
      }
    </Row>
  )
}