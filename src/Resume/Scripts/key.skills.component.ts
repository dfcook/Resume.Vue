﻿import {Component, Inject, OnInit} from 'angular2/core';
import {KeySkillsService} from './services/key.skills.service';
import {KeySkill} from './model/key.skill';
import {IndustryKnowledgeService} from './services/industry.knowledge.service';
import {IndustryKnowledge} from './model/industry.knowledge';

@Component({
    selector: 'personal-details',
    templateUrl: 'templates/key.skills.html'
})
export class KeySkillsComponent implements OnInit {
    public keySkills: KeySkill[];
    public knowledge: IndustryKnowledge[];

    constructor(private _keySkillsService: KeySkillsService,
        private _knowledgeService: IndustryKnowledgeService) { }

    ngOnInit() {
        this.keySkills = this._keySkillsService.getKeySkills();
        this.knowledge = this._knowledgeService.getIndustryKnowledge();
    }
}