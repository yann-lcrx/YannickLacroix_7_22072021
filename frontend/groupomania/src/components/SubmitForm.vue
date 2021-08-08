<template>
  <div>
    <form>
        <textarea name="write-message" id="" cols="30" rows="10"></textarea>
        <Button type="btn btn--message" :text="action" link="message"/>
    </form>
</template>

<script>
import Button from "@/components/Button";

export default {
    name: SubmitForm,
    components: {
        Button
    },
    props: {
        action: String,
    }
}
</script>

<style>

</style>