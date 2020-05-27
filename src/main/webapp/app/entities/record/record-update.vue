<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="projectApp.record.home.createOrEditLabel">Create or edit a Record</h2>
                <div>
                    <div class="form-group" v-if="record.id">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="record.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="record-date">Date</label>
                        <div class="input-group">
                            <input id="record-date" type="date" class="form-control" name="date"  :class="{'valid': !$v.record.date.$invalid, 'invalid': $v.record.date.$invalid }"
                            v-model="$v.record.date.$model"  required />
                        </div>
                        <div v-if="$v.record.date.$anyDirty && $v.record.date.$invalid">
                            <small class="form-text text-danger" v-if="!$v.record.date.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="record-title">Title</label>
                        <input type="text" class="form-control" name="title" id="record-title"
                            :class="{'valid': !$v.record.title.$invalid, 'invalid': $v.record.title.$invalid }" v-model="$v.record.title.$model"  required/>
                        <div v-if="$v.record.title.$anyDirty && $v.record.title.$invalid">
                            <small class="form-text text-danger" v-if="!$v.record.title.required">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.record.title.maxLength" >
                                This field cannot be longer than 100 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="record-detail">Detail</label>
                        <input type="text" class="form-control" name="detail" id="record-detail"
                            :class="{'valid': !$v.record.detail.$invalid, 'invalid': $v.record.detail.$invalid }" v-model="$v.record.detail.$model" />
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.record.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./record-update.component.ts">
</script>
