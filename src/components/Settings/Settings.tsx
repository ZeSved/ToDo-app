import { Custom } from "../../types"
import styles from './Settings.module.css'

export default function Settings({ DEFAULT_CUSTOM_SETTINGS }: SettingsProps){
    let labelName: string

    function nameSwitch(settings: Custom){
        switch (settings.name) {
            case 'mainColor':
                labelName = 'Main color: '
                break;
            case 'callToActionColor':
                labelName = 'Secondary color: '
                break;
            case 'textColor':
                labelName = 'Text color: '
                break;
        }

        return labelName
    }

    return (
        <>
            <div className={styles.settingsContainer}>
                {DEFAULT_CUSTOM_SETTINGS.map((settings) => (
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor={settings.name}>{nameSwitch(settings)}</label>
                        <input className={styles.settingsInput} name={settings.name} type="text" placeholder={settings.name} />
                        <div className={styles.colorDisplay} style={{backgroundColor: settings.color}}/>
                    </div>
                ))}
                <button className={styles.saveBtn}>Save</button>
            </div>
        </>
    )
}

type SettingsProps = {
    DEFAULT_CUSTOM_SETTINGS: Custom[]
}