<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="record">
                <h2 class="jh-entity-heading"><span>Record</span> {{record.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span>Date</span>
                    </dt>
                    <dd>
                        <span>{{record.date}}</span>
                    </dd>
                    <dt>
                        <span>Title</span>
                    </dt>
                    <dd>
                        <span>{{record.title}}</span>
                    </dd>
                    <dt>
                        <span>Detail</span>
                    </dt>
                    <dd>
                        <span>{{record.detail}}</span>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
                </button>
                <router-link v-if="record.id" :to="{name: 'RecordEdit', params: {recordId: record.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./record-details.component.ts">
</script>
