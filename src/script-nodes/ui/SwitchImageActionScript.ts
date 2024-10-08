
// You can write more code here

/* START OF COMPILED CODE */

import { SpriteScript } from "@phaserjs/editor-scripts-quick";
import { ScriptNode } from "@phaserjs/editor-scripts-base";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SwitchImageActionScript extends SpriteScript {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	public onTexture!: {key:string,frame?:string|number};
	public offTexture!: {key:string,frame?:string|number};
	public isOn: boolean = true;
	public mementoKey: string = "";

	/* START-USER-CODE */

	private static _memento = new Map<string, boolean>();

	protected start(): void {

		if (this.mementoKey.length > 0) {

			const value = SwitchImageActionScript._memento.get(this.mementoKey);

			if (value !== undefined) {

				this.isOn = value;
			}
		}

		this.updateTexture();
	}

	execute(args?: any): void {

		this.isOn = !this.isOn;

		if (this.mementoKey) {

			SwitchImageActionScript._memento.set(this.mementoKey, this.isOn);
		}

		this.updateTexture();
	}

	private updateTexture() {

		const tex = this.isOn ? this.onTexture : this.offTexture;

		this.gameObject.setTexture(tex.key, tex.frame);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
