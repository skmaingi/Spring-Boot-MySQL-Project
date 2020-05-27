<template>
    <div>
        <h2 id="page-heading">
            <span id="record-heading">Records</span>
            <router-link :to="{name: 'RecordCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-record">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span >
                    Create a new Record
                </span>
            </router-link>
        </h2>
        <b-alert :show="dismissCountDown"
            dismissible
            :variant="alertType"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
            {{alertMessage}}
        </b-alert>
        <br/>
        <div class="alert alert-warning" v-if="!isFetching && records && records.length === 0">
            <span>No records found</span>
        </div>
        <div class="table-responsive" v-if="records && records.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th v-on:click="changeOrder('id')"><span>ID</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('date')"><span>Date</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('title')"><span>Title</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('detail')"><span>Detail</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="record in records"
                    :key="record.id">
                    <td>
                        <router-link :to="{name: 'RecordView', params: {recordId: record.id}}">{{record.id}}</router-link>
                    </td>
                    <td>{{record.date}}</td>
                    <td>{{record.title}}</td>
                    <td>{{record.detail}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'RecordView', params: {recordId: record.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline">View</span>
                            </router-link>
                            <router-link :to="{name: 'RecordEdit', params: {recordId: record.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(record)"
                                   variant="danger"
                                   class="btn btn-sm"
                                   v-b-modal.removeEntity>
                                <font-awesome-icon icon="times"></font-awesome-icon>
                                <span class="d-none d-md-inline">Delete</span>
                            </b-button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <b-modal ref="removeEntity" id="removeEntity" >
            <span slot="modal-title"><span id="projectApp.record.delete.question">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-record-heading" >Are you sure you want to delete this Record?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-record" v-on:click="removeRecord()">Delete</button>
            </div>
        </b-modal>
        <div v-show="records && records.length > 0">
            <div class="row justify-content-center">
                <jhi-item-count :page="page" :total="queryCount" :itemsPerPage="itemsPerPage"></jhi-item-count>
            </div>
            <div class="row justify-content-center">
                <b-pagination size="md" :total-rows="totalItems" v-model="page" :per-page="itemsPerPage" :change="loadPage(page)"></b-pagination>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./record.component.ts">
</script>
